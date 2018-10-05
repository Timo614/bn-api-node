import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { TicketInterface } from "../interfaces/resources/ticket.interface";
import { UserInterface } from "../interfaces/resources/user.interface";
import { EventInterface } from "../interfaces/resources/event.interface";

/**
 * @endpoint tickets
 */
class TicketsResource extends ResourceClass {
	constructor() {
		super("tickets");
	}

	/**
	 * Gets the users tickets
	 * @auth true
	 * @params {start_utc: Date, end_utc: Date}
	 */
	index(): Array<TicketInterface> {
		return createRequestMethod({
			method: "GET",
			path: "",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Gets a single ticket
	 * @auth true
	 * @params {id: uuid}
	 * @requires {id:uuid}
	 */
	read(): {ticket: TicketInterface, user: UserInterface, event: EventInterface} {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}) as any;
	}

}
export default TicketsResource;