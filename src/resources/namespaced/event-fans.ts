import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.fans
 * @url /events/{event_id}/fans
 */
class EventFansResource extends ResourceClass {
	methodDefinitions = {
		index: this.index()
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Get a list of fans for an event
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[FanInterface]]>
	 * @url /events/{event_id}/fans
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