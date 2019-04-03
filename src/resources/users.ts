import { createRequestMethod, RequestMethodInterface } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { UserInterface } from "../interfaces/resources/user.interface";
import { OrganizationInterface } from "../interfaces/resources/organization.interface";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";
import UserDeviceTokensResource from "./namespaced/user-device-tokens";
import XhrClient from "../classes/xhr-client";

/**
 * @endpoint users
 * @url /users
 */
class UsersResource extends ResourceClass {
	methodDefinitions = {
		current: this.current(),
		update: this.update(),
		create: this.create(),
		createAndLogin: this.createAndLogin(),
		read: this.read(),
		listOrganizations: this.listOrganizations(),
	};

	constructor() {
		super("users");
		this.buildAliases();
		this.namespaces = {
			deviceTokens: UserDeviceTokensResource,
		};

	}


	/**
	 * Get your current user
	 * @auth true
	 * @url /users/me
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
	 * @url /users/me
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
	 * @params {...[[UserInterface]], captcha_response:string}
	 * @url /users/register
	 */
	create(): void {
		return createRequestMethod({
			name: "register",
			method: "POST",
			path: "/register",
			required: ["email", "password"],
			requiresAuth: false,
			beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any ) {
				for(let key in data) {
					if (key !== "password" && typeof data[key] === "string") {
						data[key] = data[key].trim();
					}
				}
			},
		}) as any;
	}

	/**
	 * Register a user and generates a login token
	 * @auth false
	 * @params {...[[UserInterface]], captcha_response:string}
	 * @required {email: string, password: string}
	 * @url /users
	 */
	createAndLogin(): AuthTokenInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["email", "password"],
			requiresAuth: false,
			beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any ) {
				for(let key in data) {
					if (key !== "password" && typeof data[key] === "string") {
						data[key] = data[key].trim();
					}
				}
			},
		}) as any;
	}

	/**
	 * Read a user
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /users/{id}
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
	 * @url /users/{id}/organizations
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