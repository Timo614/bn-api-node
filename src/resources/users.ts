import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { UserInterface } from "../interfaces/resources/user.interface";
import { OrganizationInterface } from "../interfaces/resources/organization.interface";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";
import UserDeviceTokensResource from "./namespaced/user-device-tokens";

/**
 * @endpoint users
 */
class UsersResource extends ResourceClass {
	constructor() {
		super("users");
		this.namespaces = {
			deviceTokens: UserDeviceTokensResource,
		};

	}


	/**
	 * Get your current user
	 * @auth true
	 */
	current(): UserInterface {
		return createRequestMethod({
			method: "GET",
			path: "/me",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update you current user
	 * @params {...UserInterface}
	 */
	update(): UserInterface {
		return createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/me",
			requireOne: ["first_name", "last_name", "email", "phone", "password"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Register a user
	 * @auth false
	 * @alias register
	 * @params {...UserInterface}
	 */
	create(): void {
		return createRequestMethod({
			name: "register",
			method: "POST",
			path: "/register",
			required: ["email", "password"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Register a user and generates a login token
	 * @auth false
	 * @params {...[[UserInterface]]}
	 * @required {email: string, password: string}
	 */
	createAndLogin(): AuthTokenInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["email", "password"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Read a user
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 */
	read(): UserInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get a list of organizations for the user
	 * @auth true
	 * @params {id: uuid}
	 * @required {id: uuid}
	 */
	listOrganizations(): Array<OrganizationInterface> {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/organizations",
			required: [],
			requiresAuth: true
		}) as any;
	}
}
export default UsersResource;