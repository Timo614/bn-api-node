import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint venues.events
 * @url /venues/{id}/events
 */
class VenueEventsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
	};

	constructor() {
		super("venues");
		this.buildAliases();
	}


	/**
	 * List events in the venue
	 * @params {venue_id:uuid}
	 * @required {venue_id:uuid}
	 * @data  Array<[[EventInterface]]>
	 * @deprecated Use /events?venue_id={venue_id}
	 * @url /events?venue_id={venue_id}
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			overridePath: "/events/",
			path: "?venue_id={venue_id}",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default VenueEventsResource;
