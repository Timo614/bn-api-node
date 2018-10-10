// import fs from 'fs';
import { ResourceInterface } from "../interfaces/server/resource";
import { RequestMethodInterface } from "../interfaces/server/request-method.interface";
import { getAllMethodNames } from "../helpers/utils";
import XhrClient from "./xhr-client";
import ResourceClass from "./abstracts/resource.class";

export class RequestMethod {
	private path: string;

	private client: XhrClient;

	constructor(resource: ResourceClass, client: XhrClient) {


		let self: any = this;
		let path = "/" + resource.path;


		this.path = path;
		this.client = client;

		let methods:Array<RequestMethodInterface> = resource.methods.concat(this._buildMethodArray(resource));

		for (let i in methods) {
			let method: RequestMethodInterface = methods[i];

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

	_buildMethodArray(resource: ResourceClass ):Array<RequestMethodInterface> {
		let methods: Array<RequestMethodInterface> = [];
		let availableMethods = getAllMethodNames(resource);

		availableMethods.forEach(method => {
			let resourceElement: any = (resource as any)[method];
			let requestMethod = resourceElement();

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
	 * @param path
	 * @param data
	 * @param method
	 * @private
	 */
	_replacePathVariables(
		path: string,
		data: any = {},
		method: RequestMethodInterface
	): string {
		let listOfRequiredFields = []
			.concat(method.requireOne || [])
			.concat(method.required || []);

		let regex = /{([a-zA-Z0-9_-]+)}/g;
		let newPath = path;
		let matches;
		do {
			matches = regex.exec(newPath);
			if (matches) {
				let dataKey = matches[1];
				if (data.hasOwnProperty(dataKey)) {
					let dataValue = data[dataKey];
					newPath = newPath.replace(matches[0], dataValue);
					//Remove the data key if it is not required
					if (listOfRequiredFields.indexOf(dataKey) === -1) {
						delete data[dataKey];
					}
				} else {
					throw `${path} is expecting ${dataKey} but it has not been provided in the data object`;
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
	 * @private
	 * @throws
	 */
	_requiredFieldsPresent(
		method: RequestMethodInterface,
		data: any = {},
		path = ""
	) {
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

	_request(method: RequestMethodInterface): any {
		return (
			data: any = {},
			headers: any = {},
			returnDataOnly: boolean = false
		) => {
			let path = `${this.path}${method.path}`.replace(/\/\//g, "/");
			// If the path has any {identifier} parameter, replace it with the data[identifier] key

			try {
				this._requiredFieldsPresent(method, data || {}, path);
				path = this._replacePathVariables(path, data, method);
			} catch (e) {
				return Promise.reject(e);
			}

			if (method.beforeRequest) {
				method.beforeRequest(this.client, method, data, headers);
			}

			let axiosInstance = method.requiresAuth
				? this.client.getAuthAgent(headers)
				: this.client.getPublicAgent(headers);

			let promise;

			if (this.client.mocker) {
				let mockerPath = method.method.toLowerCase() + path.replace(/\//g, ".");
				if (this.client.mocker.hasMock(mockerPath)) {
					promise = this.client.mocker.mock(
						mockerPath
					);
				}

			}

			if (process.env.DEBUG) {
				console.debug(`URL: ${path}`);
			}
			//If no promise has been set, because either we are in production or there was no mock data file do the request.
			if (!promise) {
				switch (method.method.toUpperCase()) {
					case "POST":
						promise = axiosInstance.post(path, data);
						break;
					case "PUT":
						promise = axiosInstance.put(path, data);
						break;
					case "PATCH":
						promise = axiosInstance.patch(path, data);
						break;
					case "DELETE":
						promise = axiosInstance.delete(path, { data });
						break;
					case "GET":
						promise = axiosInstance.get(path, { params: data });
						break;
				}
			}
			if (promise) {
				if (this.client.server.returnDataOnly || returnDataOnly) {
					promise = promise.then(response => {
						return Promise.resolve(response.data);
					});
				}
				if (method.afterRequest) {
					promise = promise.then(
						(data: any = {}): Promise<any> => {
							return method.afterRequest(this.client, data);
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
