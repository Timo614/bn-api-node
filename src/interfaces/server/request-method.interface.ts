import SuperagentClient from "../../classes/superagent-client";

export interface RequestMethodInterface {
    name: string;
    method: string;
    path: string;
    required?: string[];
    requiresAuth: boolean;
    encode: any;

    beforeRequest(client: SuperagentClient, method: RequestMethodInterface, data: any, headers: any ): void;

    afterRequest(client: SuperagentClient, response: any ): Promise<any>;

}

export const instanceOfRequestMethod = (base: any = {}): RequestMethodInterface => {
    return {
        ...{
            method: 'GET',
            path: '',
            name: '',
            required: [],
            requiresAuth: true,
            encode: (data: any) => data,
        },
        ...base
    } as RequestMethodInterface;
};
