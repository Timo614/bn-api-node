import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";

export default {
	path: "tickets",

	methods: [
		createRequestMethod({
			name: "transfer",
			method: "PUT",
			path: "/transfer/{id}",
			required: ["id", "destination"],
			requiresAuth: false
		}),

		createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}),

		createRequestMethod({
			name: "delete",
			method: "DELETE",
			path: "/{id}",
			required: ["id"],
			requiresAuth: false
		}),

		createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}),

		createRequestMethod({
			name: "find",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}),

		createRequestMethod({
			name: "read",
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: false
		})
	]
} as ResourceInterface;
