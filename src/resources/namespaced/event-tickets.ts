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
			path: "/{event_id}/ticket_types",
			required: ["event_id", "name"],
			requiresAuth: true
		}),

		/**
		 * Update a ticket type
		 * @name update
		 * @param params {TicketInterface}
		 * @return TicketInterface
		 */
		createRequestMethod({
			namespace: "tickets",
			name: "update",
			method: "PATCH",
			path: "/{event_id}/ticket_types/{id}",
			required: ["event_id", "id"],
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
			path: "/{id}/ticket_types",
			required: ["id"],
			requiresAuth: false
		})

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
