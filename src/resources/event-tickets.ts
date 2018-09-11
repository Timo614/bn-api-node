import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "events/{event_id}/tickets",

    methods: [
        /**
         * Create a ticket type
         * @name create
         * @param params {TicketInterface}
         * @return TicketInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["event_id", "name"],
            requiresAuth: true
        }),

        /**
         * Get a list of tickets for the event
         * @name index
         * @param params {event_id}
         * @return Array<TicketInterface>
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: ["event_id"],
            requiresAuth: false
        }),

        /**
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),

        /**
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),

        /**
         * @notimplemented
         */
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
