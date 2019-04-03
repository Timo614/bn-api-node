import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint userInvites
 * @url /user_invites
 */
class UserInvitationsResource extends ResourceClass {
	methodDefinitions = {
		create: this.create(),
	};

	constructor() {
		super("user_invites");
		this.buildAliases();
	}

	/**
	 * Invite a user
	 * @auth true
	 * @params {first_name?: string, last_name?: string, email: string}
	 * @required { email: string}
	 * @url /user_invites
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
