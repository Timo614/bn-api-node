import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "tickets",

    methods: [
        instanceOfRequestMethod({
            name: "transfer",
            method: "PUT",
            path: "/transfer/{id}",
            required: ["id", "destination"],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "update",
            method: "PUT",
            path: "/{id}",
            required: ["id"],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "/{id}",
            required: ["id"],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ["id"],
            requiresAuth: false
        })
    ]
} as ResourceInterface;
