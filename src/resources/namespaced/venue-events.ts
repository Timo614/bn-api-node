import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint venues.events
 * @url /venues/{venue_id}/events
 */
class VenueEventsResource extends ResourceClass {
	constructor() {
		super("venues");
	}


	/**
	 * List events in the venue
	 * @params {venue_id:uuid}
	 * @required {venue_id:uuid}
	 * @data  Array<[[EventInterface]]>
	 * @url /venues/{venue_id}/events
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{venue_id}/events",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default VenueEventsResource;
