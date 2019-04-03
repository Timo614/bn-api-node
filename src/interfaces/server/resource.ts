import { RequestMethodInterface } from "./request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";

export interface ResourceInterface {
	path?: string;
	methods?: RequestMethodInterface[];
	methodDefinitions?: {[key:string]: any},
	namespaces?: {[key:string]: any};
	[name: string]: any;

}

export const instanceOfResource = (base: any = {}): ResourceInterface => {
	return {
		...{
			path: "",
			methods: [],
			methodDefinitions: {}
		},
		...base
	} as ResourceInterface;
}
