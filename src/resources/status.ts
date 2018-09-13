import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: 'status',

    methods: [
        /**
         * Get the status of the server
         * @name read
         */
        createRequestMethod({
            name: 'read',
            method: 'GET',
            path: '',
            requiresAuth: false
        })
    ]


} as ResourceInterface