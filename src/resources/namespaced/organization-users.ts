import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInterface } from "../../interfaces/resources/organization.interface";
import { UserInterface } from "../../interfaces/resources/user.interface";

/**
 * @endpoint organizations.users
 */
class OrganizationUsersResource extends ResourceClass {
	constructor() {
		super("organizations");
	}


	/**
	 * Add a user to the organization
	 * @params {organization_id:uuid, user_id: uuid }
	 * @requires {organization_id:uuid, user_id: uuid }
	 */
	create(): void {
		return createRequestMethod({
			method: "POST",
			path: "/{organization_id}/users",
			required: ["organization_id", "user_id"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Delete a user from the organization
	 * @params {organization_id:uuid, user_id: uuid }
	 * @requires {organization_id:uuid, user_id: uuid }
	 */
	del(): OrganizationInterface {
		return createRequestMethod({
			name: "remove",
			method: "DELETE",
			path: "/{organization_id}/users",
			required: ["organization_id", "user_id"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List users in the organization
	 * @params {organization_id:uuid}
	 * @requires {organization_id:uuid}
	 */
	index(): { organization_owner: UserInterface, organization_members: Array<UserInterface> } {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/users",
			required: ["organization_id"],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationUsersResource;
