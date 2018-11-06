import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";

/**
 * @endpoint auth
 */
class AuthResource extends ResourceClass {
	constructor() {
		super("auth");
	}

	/**
	 * Authenticate a user
	 * @alias create
	 * @auth false
	 * @params {email:string, password: string}
	 * @required {email:string, password: string}
	 */
	authenticate(): AuthTokenInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/token",
			required: ["email", "password"],
			requiresAuth: false,
			afterRequest(server: any = {},client: any = {}, data: any = {}): Promise<any> {
				client.setToken(data.data.access_token);
				return Promise.resolve(data);
			}
		}) as any;
	}

	/**
	 * Refresh a user's token
	 * @auth true
	 * @params {refresh_token:string}
	 * @required {refresh_token:string}
	 */
	refresh(): AuthTokenInterface {
		return createRequestMethod({
			name: "refresh",
			method: "POST",
			path: "/token/refresh",
			required: ["refresh_token"],
			requiresAuth: false,
		}) as any;
	}
}

export default AuthResource;