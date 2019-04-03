import ResourceClass from "../../classes/abstracts/resource.class";
import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import { BroadcastInterface } from "../../interfaces/resources/broadcast.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.broadcasts
 * @url /events/{event_id}/broadcasts
 */
class EventBroadcastsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Create a new broadcast for an event
	 * @auth true
	 * @params {event_id:uuid, ...[[BroadcastInterface]]}
	 * @required {event_id:uuid, notification_type: [[BroadcastType]]}
	 * @url /events/{event_id}/broadcasts
	 */
	create(): BroadcastInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{event_id}/broadcasts",
			required: ["notification_type"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List the broadcasts for an event
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[BroadcastInterface]]>
	 * @url /events/{event_id}/broadcasts
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{event_id}/broadcasts",
			requiresAuth: true
		}) as any;
	}
}

export default EventBroadcastsResource;