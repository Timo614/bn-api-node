import XhrClient from "../../classes/xhr-client";

export interface RequestMethodInterface {
    name: string;
    method: string;
    path: string;
    required?: Array<string>;//All of these fields must be present
    requireOne?: Array<string>;//At least one of these fields must be present
    requiresAuth: boolean;

    beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any ): void;
    afterRequest(client: XhrClient, response: any ): Promise<any>;

}

export const instanceOfRequestMethod = (base: any = {}): RequestMethodInterface => {
    return {
        ...{
            method: 'GET',
            path: '',
            name: '',
            required: [],
            requireOne: [],
            requiresAuth: true,
        },
        ...base
    } as RequestMethodInterface;
};
