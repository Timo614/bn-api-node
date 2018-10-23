import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { HoldInterface } from "../../interfaces/resources/hold.interface";

/**
 * @endpoint events.holds
 */
class EventHoldsResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * Get a list of holds for the events
	 * @auth true
	 * @params {event_id:uuid}
	 * @requires {event_id:uuid}
	 * @data Array<[[HoldInterface]]>
	 */
	// index(): IndexInterface {
	// 	return createRequestMethod({
	// 		method: "GET",
	// 		path: "/{event_id}/holds",
	// 		required: [],
	// 		requiresAuth: true
	// 	}) as any;
	// }

	/**
	 * Create a hold for an event
	 * @auth true
	 * @params {event_id:uuid, ...[[HoldInterface]]}
	 * @requires {event_id:uuid, name: string}
	 */
	create(): HoldInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{event_id}/holds",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}

}

export default EventHoldsResource;