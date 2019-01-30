import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { TicketRedeemableInterface } from "../../interfaces/resources/ticket-redeemable.interface";

/**
 * @endpoint events.tickets
 * @url /events/{event_id}/tickets
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
	 * @url /events/{event_id}/tickets
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

	/**
	 * Redeem a ticket
	 * @auth true
	 * @params {ticket_id:uuid, event_id: uuid, redeem_key: string}
	 * @required {ticket_id:uuid, event_id: uuid, redeem_key: string}
	 * @url /events/{event_id}/redeem/{ticket_id}
	 */
	redeem(): TicketRedeemableInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{event_id}/redeem/{ticket_id}",
			required: ["redeem_key"],
			requiresAuth: true
		}) as any;
	}
}

export default EventTicketsResource;