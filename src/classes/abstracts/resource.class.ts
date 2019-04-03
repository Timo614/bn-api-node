import { ResourceInterface } from "../../interfaces/server/resource";
import { RequestMethodInterface } from "../../interfaces/server/request-method.interface";

export default class ResourceClass implements ResourceInterface {
	path: string = "";

	namespaces: {[key:string]: ResourceInterface} = {};

	methods:Array<RequestMethodInterface> = [];

	methodDefinitions:{[key: string]: any} = {};

	constructor(path: string) {
		this.path = path;
		this.buildAliases();
	}

	buildAliases() {
		for (let endpoint in this.methodDefinitions) {
			// @ts-ignore
			const names = [].concat(this.methodDefinitions[endpoint].names).concat(this.methodDefinitions[endpoint].name).filter(name => name.trim() !== "");
			// @ts-ignore
			names.forEach(name => {
				if (!this.methodDefinitions.hasOwnProperty(name)) {
					// @ts-ignore
					this.methodDefinitions[name] = this.methodDefinitions[endpoint];
				}
			});
		}
	}


}