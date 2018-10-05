import { ResourceInterface } from "../../interfaces/server/resource";
import { RequestMethodInterface } from "../../interfaces/server/request-method.interface";

export default class ResourceClass implements ResourceInterface {
	path: string = "";

	namespaces: {[key:string]: ResourceInterface} = {};

	methods:Array<RequestMethodInterface> = [];

	constructor(path: string) {
		this.path = path;

	}


}