import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

import { OrganizationInvitationInterface } from "../../interfaces/resources/organization-invitation.interface";

/**
 * @endpoint event.users
 * @url /event/{event_id}/users
 */
class EventUsersResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		invite: this.invite(),
		del: this.del(),
		deleteInvite: this.deleteInvite(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * List users with external access to this event
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[UserInterface]]>
	 * @url /events/{event_id}/users
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/users",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create an invitation to this event
	 * @auth true
	 * @params {event_id:uuid, user_email: string, roles: Array<[[UserRole]]>}
	 * @url /events/{event_id}/users
	 */
	invite(): OrganizationInvitationInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/users/invites",
			required: ["user_email", "roles"],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a promoter of this event
	 * @auth true
	 * @params {event_id:uuid, user_id: uuid}
	 * @required {event_id:uuid, user_id: uuid}
	 * @returns status: 200
	 * @url /events/{event_id}/users/{invite_id}
	 */
	del(): any {
		return createRequestMethod({
			method: "DELETE",
			path: "/{event_id}/users/{user_id}",
			required: [],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a pending invitation to be a promoter of this event
	 * @auth true
	 * @params {event_id:uuid, invite_id: uuid}
	 * @required {event_id:uuid, invite_id: uuid}
	 * @returns status: 200
	 * @url /events/{event_id}/users/invites/{invite_id}
	 */
	deleteInvite(): any {
		return createRequestMethod({
			method: "DELETE",
			path: "/{event_id}/users/invites/{invite_id}",
			required: [],
			requireOne: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventUsersResource;
