import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.guests
 * @url /events/{event_id}/guests
 */
class EventGuestsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index()
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Get a list of redeemable tickets for the event
	 * @auth true
	 * @params {event_id:uuid, changes_since: Date, query: String}
	 * @required {event_id:uuid}
	 * @data Array<[[TicketRedeemableInterface]]>
	 * @url /events/{event_id}/guests
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/guests",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventGuestsResource;
