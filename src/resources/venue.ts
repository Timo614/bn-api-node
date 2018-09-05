import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "venues",

    methods: [
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["name"],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: [],
            requiresAuth: true
        })
    ]
} as ResourceInterface;
