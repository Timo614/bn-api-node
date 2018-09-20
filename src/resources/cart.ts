import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";

/**
 * @alias order
 */
export default {
	path: "cart",

	methods: [
		/**
		 * Add a ticket to the users cart
		 * @name add
		 * @param params {ticket_type_id:string, quantity:integer}
		 * @returns OrderInterface
		 */
		createRequestMethod({
			name: "add",
			method: "POST",
			path: "",
			required: ["ticket_type_id", "quantity"],
			requiresAuth: false
		}),

		// instanceOfRequestMethod({
		//     name: "update",
		//     method: "PUT",
		//     path: "/{id}",
		//     required: ['id'],
		//     requiresAuth: true
		// }),
		// instanceOfRequestMethod({
		//     name: "delete",
		//     method: "DELETE",
		//     path: "/{id}",
		//     required: ['id'],
		//     requiresAuth: true
		// }),

		createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		})
		//
		// instanceOfRequestMethod({
		//     name: "find",
		//     method: "GET",
		//     path: "",
		//     required: [],
		//     requiresAuth: true
		// }),
		//
		// instanceOfRequestMethod({
		//     name: "read",
		//     method: "GET",
		//     path: "/{id}",
		//     required: ['id'],
		//     requiresAuth: true
		// })
	]
} as ResourceInterface;
