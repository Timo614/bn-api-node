import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "events",

    methods: [
        /**
         * List events
         * @name find
         * @param params {paginationParams}
         * @return Array<EventInterface>
         * @TODO add pagination
         */

        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: false
        }),

        /**
         * Find events
         * @name find
         * @param params {findParams}
         * @return Array<EventInterface>
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: false
        }),

        /**
         * Create Event
         * @name create
         * @param params EventInterface
         * @return EventInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["name", "organization_id", "venue_id", "event_start", "is_external"],
            requiresAuth: true
        }),

        /**
         * Edit Event
         * @name edit
         * @param params EventInterface
         * @return EventInterface
         */
        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),
        /**
         * Delete Event
         * @name delete
         * @param params {id}
         * @return EventInterface
         */
        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Read Event
         * @name read
         * @param params {id}
         * @return EventInterface
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        })
    ]
} as ResourceInterface;
