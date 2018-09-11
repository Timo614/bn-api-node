import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "events/{event_id}/interest",

    methods: [
        /**
         * Add your interest to an event
         * @name create
         * @return EventInterestInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["event_id"],
            requiresAuth: true
        }),

        /**
         * Remove your interest from an event
         * @name delete
         * @return EventInterestInterface
         */
        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "",
            required: ["event_id"],
            requiresAuth: true
        }),

    ]
} as ResourceInterface;
