import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInterface } from "../../interfaces/resources/organization.interface";

/**
 * @endpoint organizations.owner
 */
class OrganizationOwnersResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Change the owner of this organization
	 * @auth true
	 * @params {organization_id:uuid, owner_user_id: uuid}
	 * @requires {organization_id:uuid, owner_user_id: uuid}
	 */
	update(): OrganizationInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{organization_id}/owner",
			required: ["organization_id", "owner_user_id"],
			requiresAuth: true
		}) as any;
	}

}
export default OrganizationOwnersResource;
