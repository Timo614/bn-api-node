import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInvitationInterface } from "../../interfaces/resources/organization-invitation.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint users.invite
 */
class UserInvitationsResource extends ResourceClass {
	constructor() {
		super("users");
	}

	/**
	 * Invite a user
	 * @auth true
	 * @params {first_name?: string, last_name?: string, email: string}
	 * @required { email: string}
	 */
	create(): void {
		return createRequestMethod({
			method: "POST",
			path: "/user_invites",
			required: ["email"],
			requiresAuth: true
		}) as any;
	}


}

export default UserInvitationsResource;
