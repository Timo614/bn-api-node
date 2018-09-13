import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "users",

    methods: [

        /**
         * Register a user
         * @name create
         * @return
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "/register",
            required: ["first_name", "last_name", "email", "phone", "password"],
            requiresAuth: false
        }),

        /**
         * Update your own user
         */
        instanceOfRequestMethod({
            name: "update",
            method: "PUT",
            path: "/me",
            requireOne: ["first_name", "last_name", "email", "phone"],
            requiresAuth: true
        }),

        /**
         * Get your current user
         */
        instanceOfRequestMethod({
            name: "current",
            method: "GET",
            path: "/me",
            required: [],
            requiresAuth: true
        }),

        /**
         * List of users
         * @name index
         * @return Array<UserInterface>
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        /**
         * Find a user
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: ["email"],
            requiresAuth: true
        }),

        /**
         * Read a user
         * @name read
         * @param {id}
         * @return UserInterface
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * List of organizations for a user
         * @name organization.index
         * @return Array<UserInterface>
         */
        instanceOfRequestMethod({
            namespace: 'organizations',
            name: "index",
            method: "GET",
            path: "/{id}/organizations",
            required: ['id'],
            requiresAuth: true
        }),
    ]
} as ResourceInterface;
