import {createRequestMethod} from "../../interfaces/server/request-method.interface";
import {ResourceInterface} from "../../interfaces/server/resource";

export default {

    methods: [
        /**
         * Add your interest to an event
         * @name interests.create
         * @return EventInterestInterface
         */
        createRequestMethod({
            namespace:'interests',
            name: "create",
            method: "POST",
            path: "/{id}/interest",
            required: ["id"],
            requiresAuth: true
        }),

        /**
         * Remove your interest from an event
         * @name interests.delete
         * @return EventInterestInterface
         */
        createRequestMethod({
            namespace:'interests',
            name: "delete",
            method: "DELETE",
            path: "/{id}/interest",
            required: ["id"],
            requiresAuth: true
        }),

    ]
} as ResourceInterface;
