import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketInterface } from "../../interfaces/resources/ticket.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.tickets
 */
class EventTicketsResource extends ResourceClass {
	constructor() {
		super("events");
	}



	/**
	 * Get a list of tickets for the event for the user
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[TicketInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/tickets",
			required: ["event_id"],
			requiresAuth: false
		}) as any;
	}
}

export default EventTicketsResource;