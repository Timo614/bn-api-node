import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint userInvites
 */
class UserInvitationsResource extends ResourceClass {
	constructor() {
		super("user_invites");
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
			path: "",
			required: ["email"],
			requiresAuth: true
		}) as any;
	}


}

export default UserInvitationsResource;
