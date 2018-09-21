import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";
import EventArtist from "./namespaced/event-artists";
import EventInterest from "./namespaced/event-interests";
import EventTicket from "./namespaced/event-tickets";

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

		createRequestMethod({
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
		createRequestMethod({
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
		createRequestMethod({
			name: "create",
			method: "POST",
			path: "",
			required: ["name", "organization_id", "venue_id", "event_start", "is_external"],
			requiresAuth: true
		}),

		/**
         * Edit Event
         * @name update
         * @param params EventInterface
         * @return EventInterface
         */
		createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}),
		/**
         * Delete Event
         * @name delete
         * @param params {id}
         * @return EventInterface
         */
		createRequestMethod({
			name: "delete",
			method: "DELETE",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}),

		/**
         * Read Event
         * @name read
         * @param params {id}
         * @return EventInterface
         */
		createRequestMethod({
			name: "read",
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		})
	]
		.concat(EventArtist.methods)
		.concat(EventInterest.methods)
		.concat(EventTicket.methods)
} as ResourceInterface;