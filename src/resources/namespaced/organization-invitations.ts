import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInvitationInterface } from "../../interfaces/resources/organization-invitation.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.invite
 */
class OrganizationInvitationsResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Create and invitation to this organization
	 * @auth true
	 * @alias invite
	 * @params {organization_id:uuid, user_email: string, roles: Array<[[UserRole]]>}
	 * @required {organization_id:uuid, user_email: string, roles: Array<[[UserRole]]>}
	 */
	create(): OrganizationInvitationInterface {
		return createRequestMethod({
			name: "invite",
			method: "POST",
			path: "/{organization_id}/invites",
			required: ["user_email", "roles"],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Index pending invitation to this organization
	 * @auth true
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[OrganizationInvitationInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/invites",
			required: [],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a pending invitation to this organization
	 * @auth true
	 * @params {organization_id:uuid, invite_id: uuid}
	 * @required {organization_id:uuid, invite_id: uuid}
	 * @returns status: 200
	 */
	del(): any {
		return createRequestMethod({
			method: "DELETE",
			path: "/{organization_id}/invites/{invite_id}",
			required: [],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}
}

export default OrganizationInvitationsResource;
