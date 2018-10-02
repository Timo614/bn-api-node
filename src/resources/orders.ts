import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";

export default {
	path: "orders",

	methods: [
		/**
		 * List orders
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
		 * Read Order
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
} as ResourceInterface;
