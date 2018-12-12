import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInterface } from "../../interfaces/resources/organization.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.users
 */
class OrganizationUsersResource extends ResourceClass {
	constructor() {
		super("organizations");
	}


	/**
	 * Adds a role to user to the organization, if the user does not exist, it will be created
	 * @params {organization_id:uuid, user_id: uuid }
	 * @required {organization_id:uuid, user_id: uuid, role: string }
	 */
	add(): void {
		return createRequestMethod({
			method: "POST",
			path: "/{organization_id}/users",
			required: ["user_id", "role"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Delete a user from the organization
	 * @params {organization_id:uuid, user_id: uuid }
	 * @required {organization_id:uuid, user_id: uuid }
	 */
	del(): OrganizationInterface {
		return createRequestMethod({
			name: "remove",
			method: "DELETE",
			path: "/{organization_id}/users",
			required: ["user_id"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List users in the organization
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[UserInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/users",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationUsersResource;
