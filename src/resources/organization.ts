import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "organizations",

    methods: [
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["owner_user_id", "name"],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "",
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
