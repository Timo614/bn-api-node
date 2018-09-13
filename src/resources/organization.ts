import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "organizations",

    methods: [

        /**
         * Invite a user to the organization
         * @name invite
         * @param params {id, user_id | user_email}
         */
        instanceOfRequestMethod({
            name: "invite",
            method: "POST",
            path: "/{id}/invite",
            required: ["id"],
            requireOne: ["user_id", "user_email"],
            requiresAuth: true
        }),
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
        }),

        instanceOfRequestMethod({
            name: "events",
            method: "GET",
            path: "/{id}/events",
            required: [],
            requiresAuth: true

        }),



    ]
} as ResourceInterface;
