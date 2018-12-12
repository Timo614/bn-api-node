import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { DeviceTokenInterface } from "../../interfaces/resources/device-token.interface";

/**
 * @endpoint users.deviceTokens
 */
class UserDeviceTokensResource extends ResourceClass {
	constructor() {
		super("users");
	}

	/**
	 * List the device tokens for a user
	 * @params {user_id: uuid}
	 * @required {user_id: uuid}
	 */
	read(): DeviceTokenInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{user_id}/tokens",
			required: [],
			requiresAuth: true
		}) as any;
	}
	

	/**
	 * List the logged in users' device tokens
	 * @params {...[[PagingInterface]], }
	 * @data Array<[[DeviceTokenInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/tokens",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
     * Create a device token for the logged in user
     * @params {...[[DeviceTokenInterface]], }
     * @required {token_source: [[DeviceTokenSource]], token: string}
     */
	create(): DeviceTokenInterface {
		return createRequestMethod({
			method: "POST",
			path: "/tokens",
			required: ["token_source", "token"],
			requiresAuth: true
		}) as any;
	}

	/**
     * Delete a device token for a user
     * @params { token_id: uuid }
     * @required {token_id: uuid}
     */
	del(): DeviceTokenInterface {
		return createRequestMethod({
			method: "DELETE",
			path: "/tokens/{token_id}",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default UserDeviceTokensResource;
