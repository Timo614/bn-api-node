import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";

/**
 * @endpoint passwordReset
 * @url /password_reset
 */
class PasswordResetResource extends ResourceClass {
	constructor() {
		super("password_reset");
	}

	/**
	 * Start the password reset process
	 * @params {email:string}
	 * @return
	 * @url /password_reset
	 */
	create(): {message?:string, error?:string} {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["email"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Reset your password
	 * @name update
	 * @params {password_reset_token:string, password:string}
	 * @return
	 * @url /password_reset
	 */
	update():AuthTokenInterface {
		return createRequestMethod({
			method: "PUT",
			path: "",
			required: ["password_reset_token", "password"],
			requiresAuth: false
		}) as any;
	}

}
export default PasswordResetResource;