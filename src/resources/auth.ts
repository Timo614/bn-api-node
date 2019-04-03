import { createRequestMethod, RequestMethodInterface } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";
import XhrClient from "../classes/xhr-client";

/**
 * @endpoint auth
 * @url /auth
 */
class AuthResource extends ResourceClass {
	methodDefinitions = {
		authenticate: this.authenticate(),
		refresh: this.refresh(),
	};

	constructor() {
		super("auth");
		this.buildAliases();
	}

	/**
	 * Authenticate a user
	 * @alias create
	 * @auth false
	 * @params {email:string, password: string, captcha_response?: string}
	 * @required {email:string, password: string}
	 * @url /auth/token
	 */
	authenticate(): AuthTokenInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/token",
			required: ["email", "password"],
			requiresAuth: false,
			beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any) {
				for (let key in data) {
					if (key !== "password" && typeof data[key] === "string") {
						data[key] = data[key].trim();
					}
				}
			},
			afterRequest(server: any = {}, client: any = {}, data: any = {}): Promise<any> {
				client.setTokens(data.data);
				return Promise.resolve(data);
			}
		}) as any;
	}

	/**
	 * Refresh a user's token
	 * @auth false
	 * @params {refresh_token:string}
	 * @required {refresh_token:string}
	 * @url /auth/token/refresh
	 */
	refresh(): AuthTokenInterface {
		return createRequestMethod({
			name: "refresh",
			method: "POST",
			path: "/token/refresh",
			required: ["refresh_token"],
			requiresAuth: false,
			afterRequest(server: any = {}, client: any = {}, data: any = {}): Promise<any> {
				client.setTokens(data.data);
				return Promise.resolve(data);
			}
		}) as any;
	}
}

export default AuthResource;