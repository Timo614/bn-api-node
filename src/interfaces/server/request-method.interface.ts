import XhrClient from "../../classes/xhr-client";
import Server from "../../classes/server";

export interface RequestMethodInterface {
    namespace?: string;
    names: Array<string>;
    name: string;
    method: string;
    path: string;
    required?: Array<string>;//All of these fields must be present
    requireOne?: Array<string>;//At least one of these fields must be present
    requiresAuth: boolean;

    beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any ): void;
    afterRequest(server: Server, client: XhrClient, response: any ): Promise<any>;

}

export const createRequestMethod = (base: any = {}): RequestMethodInterface => {
	return {
		...{
			namespace: "",
			method: "GET",
			path: "",
			names: [],
			name: "",
			required: [],
			requireOne: [],
			requiresAuth: true,
		},
		...base
	} as RequestMethodInterface;
};
