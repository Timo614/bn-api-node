import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "events/{event_id}/tickets",

    methods: [
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["event_id", "name", "start_date", "end_date", "quantity", "limit", "pricing"],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),
        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: ["event_id"],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: ["event_id"],
            requiresAuth: false
        }),

        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: false
        })
    ]
} as ResourceInterface;
