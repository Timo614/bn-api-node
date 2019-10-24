import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { BroadcastInterface } from "../interfaces/resources/broadcast.interface";

/**
 * @endpoint broadcasts
 * @url /broadcasts
 */
class BroadcastsResource extends ResourceClass {
	methodDefinitions = {
		read: this.read(),
		update: this.update(),
		del: this.del(),
		opened: this.opened(),
	};

	constructor() {
		super("broadcasts");
		this.buildAliases();
	}

	/**
	 * Read a broadcast
	 * @required {id:uuid}
	 * @auth false
	 * @url /broadcasts/{id}
	 */
	read(): BroadcastInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update a broadcast
	 * @required {id:uuid}
	 * @params {...[[BroadcastInterface]]}
	 * @auth true
	 * @url /broadcasts/{id}
	 */
	update(): BroadcastInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			requireOne: ["name", "notification_type", "message", "send_at"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Cancel a broadcast
	 * @required {id:uuid}
	 * @auth true
	 * @url /broadcasts/{id}
	 */
	del(): BroadcastInterface {
		return createRequestMethod({
			name: "cancel",
			method: "DELETE",
			path: "/{id}",
			requiresAuth: true
		}) as any;
	}

	/**
	 * Opened a broadcast
	 * @required {id:uuid, user_id: Uuid}
	 * @params {id:uuid, user_id: Uuid}
	 * @auth true
	 * @url /broadcasts/{id}/opened
	 */
	opened(): BroadcastInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}/opened",
			requireOne: ["user_id"],
			requiresAuth: true
		}) as any;
	}
}

export default BroadcastsResource;
