import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.guests
 */
class EventGuestsResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * Get a list of redeemable tickets for the event
	 * @auth true
	 * @params {event_id:uuid}
	 * @requires {event_id:uuid}
	 * @data Array<[[TicketRedeemableInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/guests",
			required: ["query"],
			requiresAuth: true
		}) as any;
	}
}

export default EventGuestsResource;