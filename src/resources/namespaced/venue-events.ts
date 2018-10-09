import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventInterface } from "../../interfaces/resources/event.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint venues.events
 */
class VenueEventsResource extends ResourceClass {
	constructor() {
		super("venues");
	}


	/**
	 * List events in the venue
	 * @params {venue_id:uuid}
	 * @requires {venue_id:uuid}
	 * @data  Array<[[EventInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{venue_id}/events",
			required: ["venue_id"],
			requiresAuth: true
		}) as any;
	}


}

export default VenueEventsResource;
