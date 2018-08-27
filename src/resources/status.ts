import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: 'status',

    methods: [
        instanceOfRequestMethod({
            name: 'get',
            method: 'GET',
            path: '',
            requiresAuth: false
        })
    ]


} as ResourceInterface