import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";

/**
 * @endpoint external
 * @url /external
 */
class ExternalResource extends ResourceClass {
	constructor() {
		super("external");
	}

	/**
	 * Login with Facebook
	 * @auth false
	 * @params {accessToken: string, userID:string}
	 * @url /external/facebook/web_login
	 */
	facebookLogin(): AuthTokenInterface {
		return createRequestMethod({
			method: "POST",
			path: "/facebook/web_login",
			required: ["accessToken"],
			requiresAuth: false
		}) as any;
	}
}
export default ExternalResource;
