import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: 'users',

    methods: [
        instanceOfRequestMethod({
            name: 'create',
            method: 'POST',
            path: 'register',
            required: [
                'first_name',
                'last_name',
                'email',
                'phone',
                'password'
            ],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: 'current',
            method: 'GET',
            path: 'me',
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: 'find',
            method: 'GET',
            path: '',
            required: ['email'],
            requiresAuth: true
        })
    ]
} as ResourceInterface