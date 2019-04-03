// import fs from 'fs';
import { ResourceInterface } from "../interfaces/server/resource";
import { createRequestMethod, RequestMethodInterface } from "../interfaces/server/request-method.interface";
import { getAllMethodNames } from "../helpers/utils";
import XhrClient from "./xhr-client";
import ResourceClass from "./abstracts/resource.class";
import Server from "./server";

export class RequestMethod {
	private path: string;

	public resource: ResourceClass;

	methods: Array<RequestMethodInterface> = [];

	constructor(private parentEndpoint: string, resource: ResourceClass, private client: XhrClient, private server: Server) {


		let self: any = this;
		let path = "/" + resource.path;

		this.resource = resource;

		this.path = path;

		this.methods = resource.methods.concat(this._buildMethodArray(resource));

		for (let i in this.methods) {
			let method: RequestMethodInterface = this.methods[i];

			let request: any = this._request(method);
			//Attach the request to the each of the names
			method.names.forEach(name => {

				let namespace = self;
				//This allows us to nest methods in a namespace
				if (method.namespace) {
					if (!self.hasOwnProperty(method.namespace)) {
						self[method.namespace] = {};
					}
					namespace = self[method.namespace];
				}
				//Attach the request method to the namespace
				namespace[name] = request;
			});
		}
	}

	_buildMethodArray(resource: ResourceClass): Array<RequestMethodInterface> {
		let methods: Array<RequestMethodInterface> = [];

		let availableMethods = getAllMethodNames(resource);
		if (availableMethods.length === 0) {
			console.error(`No methods have been defined for ${this.path}`);
		}
		availableMethods.forEach((method:string) => {
			let requestMethod: RequestMethodInterface = resource.methodDefinitions[method];

			//If we specify a name add it to the list of aliases
			if (requestMethod.name) {
				requestMethod.names.push(requestMethod.name);
			}
			//If the method name doesn't match any of the existing names, add it
			if (requestMethod.names.indexOf(method) === -1) {
				requestMethod.names.push(method);
			}

			methods.push(requestMethod);
		});

		for (let namespace in resource.namespaces) {
			let NamespacedResource: ResourceClass = resource.namespaces[namespace] as ResourceClass;
			// @ts-ignore
			let namespacedResource: any = new NamespacedResource();

			let namespaceMethods = this._buildMethodArray(namespacedResource).map(item => {
				item.namespace = namespace;
				return item;
			});
			methods = methods.concat(namespaceMethods);
		}

		return methods;
	}

	/**
	 * Checks for {key} in the path and replaces it with the value in the data object
	 * Add an optional | for a default value {key|1} would add a 1 as the default value
	 * @param path
	 * @param data
	 * @param method
	 * @param ignoreValidation
	 * @private
	 */
	_replacePathVariables(
		path: string,
		data: any = {},
		method: RequestMethodInterface,
		ignoreValidation: boolean = false
	): string {
		let listOfRequiredFields = []
			.concat(method.requireOne || [])
			.concat(method.required || []);

		let regex = /{([a-zA-Z0-9_-]+)(\|{1}(.*?))?}/g;
		let newPath = path;
		let matches;
		do {
			matches = regex.exec(newPath);
			if (matches) {
				let dataKey = matches[1];
				//Check if there is a default value
				let dataValue = typeof matches[3] === "undefined" ? null : matches[3];

				if (data.hasOwnProperty(dataKey)) {
					//Always use the defined data over the default
					dataValue = data[dataKey];
					//Remove the data key if it is not required
					if (listOfRequiredFields.indexOf(dataKey) === -1) {
						delete data[dataKey];
					}
				}

				if (dataValue !== null) {
					newPath = newPath.replace(matches[0], dataValue);
				} else {
					if (!ignoreValidation) {
						throw `${path} is expecting ${dataKey} but it has not been provided in the data object`;
					}

				}
			}
		} while (matches);
		return newPath;
	}

	/**
	 * Checks the if any required fields are present in the data object
	 * @param method
	 * @param data
	 * @param path
	 * @param ignoreValidation
	 * @private
	 * @throws
	 */
	_requiredFieldsPresent(
		method: RequestMethodInterface,
		data: any = {},
		path = "",
		ignoreValidation: boolean = false
	) {
		if (ignoreValidation) {
			return true;
		}
		let missingRequiredFields = [];
		method.required = method.required || [];

		for (let i in method.required) {
			let requiredField = method.required[i];
			if (!data.hasOwnProperty(requiredField)) {
				missingRequiredFields.push(requiredField);
			}
		}
		if (missingRequiredFields.length) {
			throw new Error(`${path} is expecting these fields: ${method.required.join(", ")}`);
		}

		method.requireOne = method.requireOne || [];

		if (method.requireOne.length) {
			for (let i in method.requireOne) {
				let requiredField = method.requireOne[i];
				if (data.hasOwnProperty(requiredField)) {
					return true;
				}
			}
			throw new Error(`${path} is expecting at least one of these fields: ${method.requireOne.join(
				", "
			)}`);
		}

		return true;
	}

	/**
	 * This creates the request function that will be called by the server
	 *
	 * @param method
	 * @returns A function that when called requests the data from the server or a mocker
	 */
	_request(method: RequestMethodInterface): (data: Object, headers: Object, returnDataOnly: boolean, overrideMethod: RequestMethodInterface) => Promise<any> {
		return async (
			data: any = {},
			headers: any = {},
			returnDataOnly: boolean = false,
			overrideMethod: any = {},
			ignoreValidation: boolean = false
		) => {
			method = { ...method, ...overrideMethod };
			let overridePath = method.overridePath || this.path;
			let path = `${overridePath}${method.path}`.replace(/\/\//g, "/");
			// If the path has any {identifier} parameter, replace it with the data[identifier] key

			try {
				this._requiredFieldsPresent(method, data || {}, path, ignoreValidation);
				path = this._replacePathVariables(path, data, method, ignoreValidation);
			} catch (e) {
				return Promise.reject(e);
			}

			if (method.beforeRequest) {
				method.beforeRequest(this.client, method, data, headers);
			}



			let promise;


			if (this.client.mocker) {
				if (process.env.DEBUG) {
					console.debug(`URL: ${path}`);
				}
				for (let i in method.names) {
					let methodName = method.names[i];
					let mockerPath = `${this.parentEndpoint}.${method.namespace ? (method.namespace + ".") : ""}${methodName}`;

					if (this.client.mocker.hasMock(mockerPath)) {
						promise = this.client.mocker.mock(
							mockerPath
						);
					}
				}
			} else {
				let axiosInstance = method.requiresAuth
					? await this.client.getAuthAgent(headers)
					: await this.client.getPublicAgent(headers);


				if (process.env.DEBUG) {
					console.debug(`URL: ${axiosInstance.baseURL}${path}`);
				}
				if (method.minTimeout && method.minTimeout > axiosInstance.defaults.timeout) {
					axiosInstance.defaults.timeout = method.minTimeout;
				}
				//If no promise has been set, because either we are in production or there was no mock data file do the request.
				let cancelToken = method.cancelToken ? method.cancelToken.token : null;

				if (!promise) {
					switch (method.method.toUpperCase()) {
						case "POST":
							promise = axiosInstance.post(path, data, { cancelToken });
							break;
						case "PUT":
							promise = axiosInstance.put(path, data, { cancelToken });
							break;
						case "PATCH":
							promise = axiosInstance.patch(path, data, { cancelToken });
							break;
						case "DELETE":
							promise = axiosInstance.delete(path, { cancelToken, data });
							break;
						case "GET":
							promise = axiosInstance.get(path, { cancelToken, params: data });
							break;
					}
				}
			}

			if (promise) {
				if (this.client.serverInterface.returnDataOnly || returnDataOnly) {
					promise = promise.then((response:any) => {
						return Promise.resolve(response.data);
					});
				}
				if (method.afterRequest) {
					promise = promise.then(
						(data: any = {}): Promise<any> => {
							return method.afterRequest(this.server, this.client, data);
						}
					);
				}

				return promise;
			} else {
				return Promise.reject("Invalid Method");
			}
		};
	}
}
