import {
	createServer,
	ServerInterface
} from "../interfaces/server/server.interface";
import XhrClient from "./xhr-client";

import Resources from "../resources/index";
import { RequestMethod } from "./request-method";
import { MockerInterface } from "../interfaces/mocks/mocker.interface";
import { ResourceInterface } from "../interfaces/server/resource";

export class Server {
	private serverInterface: ServerInterface;

	private client: any;

	/**
	 * Temporary store of all resources
	 */
	matchingResources: Array<any> = [];

	constructor(options: any, headers: any = {}, mocker?: MockerInterface) {
		let self: any = this;
		this.serverInterface = createServer(options);
		this.client = new XhrClient(this.serverInterface, headers, mocker);

		for (let key in Resources) {
			let resourceData: any = Resources[key];

			if (this._isClass(resourceData)) {
				resourceData = new resourceData();
			}

			let resource: RequestMethod = new RequestMethod(
				resourceData,
				this.client
			);
			self[key] = resource;

			this.matchingResources = this.matchingResources.concat(this._getMatchingResources(resourceData, key));
		}
	}

	_isClass(resourceData:any):boolean {
		return resourceData && resourceData.prototype && !!resourceData.prototype.constructor.name;
	}

	/**
	 * A temporary function to pull the full paths of all of the endpoints
	 * Once we have fully migrated over to this library this can be removed.
	 * @param resourceData
	 * @param key
	 * @private
	 */
	_getMatchingResources(resourceData: ResourceInterface, key: string): Array<any> {
		let paths = [];
		for (let i in resourceData.methods) {
			let { path, method, namespace, name } = resourceData.methods[i];
			let methodBlock = {
				name,
				namespace,
				path,
				method,
				key,
				fullPath: `${resourceData.path}${path}`.replace(/\/\//g, "/").replace(/\{.*?\}/gi, "{id}"),
			};

			paths.push(methodBlock)
		}
		return paths;
	}

	matchUrl(method: string, url: string, instanceName: string = "bigneon"): string {
		let resultPath = "";
		url = url.replace(/([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})/gi, "{id}");
		if (url[0] === "/") {
			url = url.substr(1);
		}

		let foundPaths = this.matchingResources.filter(item => item.method.toLowerCase() === method.toLowerCase() && item.fullPath === url);
		if (foundPaths.length) {

			resultPath = foundPaths
				.map(item => {
					return `${instanceName}.${item.key}${item.namespace ? ("." + item.namespace) : ""}.${item.name}()`;
				})
				.join("\n");
		}
		return resultPath;
	}
}

export default Server;
