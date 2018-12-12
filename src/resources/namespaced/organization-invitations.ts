import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInvitationInterface } from "../../interfaces/resources/organization-invitation.interface";

/**
 * @endpoint organizations.invite
 */
class OrganizationInvitationsResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * List the events that are a part of this organization
	 * @auth true
	 * @alias invite
	 * @params {organization_id:uuid, user_email: string, role: string}
	 * @required {organization_id:uuid, user_email: string, role: string}
	 * @requireOne [user_email: string, role: string]
	 */
	create(): OrganizationInvitationInterface {
		return createRequestMethod({
			name: "invite",
			method: "POST",
			path: "/{organization_id}/invite",
			required: [],
			requireOne: ["user_email", "role"],
			requiresAuth: true
		}) as any;
	}

}
export default OrganizationInvitationsResource;
