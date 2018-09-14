import { RequestMethodInterface } from "./request-method.interface";

export interface ResourceInterface {
    path:string,
    methods: RequestMethodInterface[]
}

export const instanceOfResource = (base:any = {}) : ResourceInterface => {
	return {
		...{
			path: "",
			methods: []
		},
		...base
	} as ResourceInterface;
}
