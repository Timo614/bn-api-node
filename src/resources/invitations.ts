import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint invitations
 */
class InvitationsResource extends ResourceClass {
	constructor() {
		super("invitations");
	}

	/**
	 * Accept an invitation
	 * 200 response on success
	 * @params {security_token: string}
	 * @required {security_token: string}
	 */
	accept(): void {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["security_token"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Decline an invitation
	 * @params {security_token: string}
	 * @required {security_token: string}
	 */
	decline():void {
		return createRequestMethod({
			method: "DELETE",
			path: "?security_token={security_token}",
			required: ["security_token"],
			requiresAuth: false
		})as any;
	}

	// /**
	//  * Read the invitation
	//  * @params {security_token: string}
	//  * @required {security_token: string}
	//  */
	// read(): any {
	// 	return createRequestMethod({
	// 		method: "GET",
	// 		path: "",
	// 		required: ["security_token"],
	// 		requiresAuth: false
	// 	}) as any;
	// }
}
export default InvitationsResource;