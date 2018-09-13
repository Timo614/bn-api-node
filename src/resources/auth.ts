import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: 'auth',

    methods: [
        /**
         * Authenticate a user
         * @name create
         * @param params {email, password}
         * @returns UserInterface
         */
        createRequestMethod({
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

        /**
         * Refresh a user's auth token
         * @name refresh
         * @param params {refresh_token}
         */
        createRequestMethod({
            name: 'refresh',
            method: 'POST',
            path: '/token/refresh',
            required: ['refresh_token'],
            requiresAuth: false,
        }),
    ]


} as ResourceInterface
