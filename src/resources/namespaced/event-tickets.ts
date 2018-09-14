import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import { ResourceInterface } from "../../interfaces/server/resource";

export default {

	methods: [
		/**
         * Create a ticket type
         * @name create
         * @param params {TicketInterface}
         * @return TicketInterface
         */
		createRequestMethod({
			namespace: "tickets",
			name: "create",
			method: "POST",
			path: "/{id}/tickets",
			required: ["id", "name"],
			requiresAuth: true
		}),

		/**
         * Get a list of tickets for the event
         * @name index
         * @param params {event_id}
         * @return Array<TicketInterface>
         */
		createRequestMethod({
			namespace: "tickets",
			name: "index",
			method: "GET",
			path: "/{id}/tickets",
			required: ["id"],
			requiresAuth: false
		}),

		// /**
		//  * @notimplemented
		//  */
		// createRequestMethod({
		//     name: "update",
		//     method: "PUT",
		//     path: "/{id}",
		//     required: ["event_id", "id"],
		//     requiresAuth: true
		// }),
		//
		// /**
		//  * @notimplemented
		//  */
		// createRequestMethod({
		//     name: "delete",
		//     method: "DELETE",
		//     path: "/{id}",
		//     required: ["event_id", "id"],
		//     requiresAuth: true
		// }),
		//
		// /**
		//  * @notimplemented
		//  */
		// createRequestMethod({
		//     name: "find",
		//     method: "GET",
		//     path: "",
		//     required: ["event_id"],
		//     requiresAuth: false
		// }),
		//
		// createRequestMethod({
		//     name: "read",
		//     method: "GET",
		//     path: "/{id}",
		//     required: ["event_id", "id"],
		//     requiresAuth: false
		// })
	]
} as ResourceInterface;
