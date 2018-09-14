import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";

export default {
	path: "password_reset",

	methods: [
		/**
         * Start the password reset process
         * @name create
         * @param params {email}
         * @return
         */
		createRequestMethod({
			name: "create",
			method: "POST",
			path: "",
			required: ["email"],
			requiresAuth: false
		}),
		/**
         * Reset your password
         * @name update
         * @param params {password_reset_token, password}
         * @return
         */
		createRequestMethod({
			name: "update",
			method: "PUT",
			path: "",
			required: ["password_reset_token", "password"],
			requiresAuth: false
		}),



	]
} as ResourceInterface;
