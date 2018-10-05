import { RequestMethodInterface } from "./request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";

export interface ResourceInterface {
	path?: string;
	methods?: RequestMethodInterface[];
	namespaces?: {[key:string]: any};
	[name: string]: any;

}

export const instanceOfResource = (base: any = {}): ResourceInterface => {
	return {
		...{
			path: "",
			methods: []
		},
		...base
	} as ResourceInterface;
}
