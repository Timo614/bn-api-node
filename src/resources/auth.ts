import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: 'auth',

    methods: [
        instanceOfRequestMethod({
            name: 'create',
            method: 'POST',
            path: '/token',
            required: ['email', 'password'],
            requiresAuth: false,
            afterRequest(client:any = {}, data:any = {}): Promise<any> {
                client.setToken (data.data.access_token);
                return Promise.resolve(data);
            }
        }),

        instanceOfRequestMethod({
            name: 'refresh',
            method: 'POST',
            path: '/token/refresh',
            required: ['refresh_token'],
        }),
    ]


} as ResourceInterface
