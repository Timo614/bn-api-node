import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.fans
 */
class EventFansResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * Get a list of fans for an event
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[FanInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/fans",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventFansResource;