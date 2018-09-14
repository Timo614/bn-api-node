import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";

export default {
	path: "venues",

	methods: [
		/**
         * Create a venue
         * @name create
         */
		createRequestMethod({
			name: "create",
			method: "POST",
			path: "",
			required: ["name"],
			requiresAuth: true
		}),

		createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}),

		/**
         * @name index
         */
		createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}),

		/**
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
         * Get a venue
         * @name read
         */
		createRequestMethod({
			name: "read",
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: false
		}),

		/**
         * Get a list of events at a venue
         * @name events.index
         */
		createRequestMethod({
			namespace: "events",
			name: "index",
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: false
		}),

		/**
         * Add venue to an organization
         * @name events.index
         */
		createRequestMethod({
			namespace: "organizations",
			name: "create",
			method: "POST",
			path: "/{id}",
			required: ["id", "organization_id"],
			requiresAuth: false
		}),



	]
} as ResourceInterface;
