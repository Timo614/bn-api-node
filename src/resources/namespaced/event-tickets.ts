import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketInterface } from "../../interfaces/resources/ticket.interface";

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
	 * @requires {event_id:uuid}
	 */
	index(): Array<TicketInterface> {
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