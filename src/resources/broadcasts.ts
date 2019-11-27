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
	 * Opened a broadcast, ping the tracking counter
	 * @required {id:uuid}
	 * @params {id:uuid}
	 * @auth true
	 * @url /broadcasts/{id}/tracking_count
	 */
	opened(): BroadcastInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/tracking_count",
			requiresAuth: true
		}) as any;
	}
}

export default BroadcastsResource;
