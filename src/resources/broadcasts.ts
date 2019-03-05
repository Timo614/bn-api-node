import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { BroadcastInterface } from "../interfaces/resources/broadcast.interface";

/**
 * @endpoint broadcasts
 * @url /broadcasts
 */
class BroadcastsResource extends ResourceClass {
	constructor() {
		super("broadcasts");
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
}

export default BroadcastsResource;