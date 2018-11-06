import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { TicketInterface } from "../interfaces/resources/ticket.interface";
import { UserInterface } from "../interfaces/resources/user.interface";
import { EventInterface } from "../interfaces/resources/event.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import TicketRedeemResource from "./namespaced/ticket-redeem";
import TicketTransferResource from "./namespaced/ticket-transfer";

/**
 * @endpoint tickets
 */
class TicketsResource extends ResourceClass {
	constructor() {
		super("tickets");
		this.namespaces = {
			redeem: TicketRedeemResource,
			transfer: TicketTransferResource,
		}
	}

	/**
	 * Gets the users tickets
	 * @auth true
	 * @params {start_utc: Date, end_utc: Date}
	 * @data Array<[[TicketInterface]]>
	 */
	index(): IndexInterface {
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
	 * @required {id:uuid}
	 */
	read(): {ticket: TicketInterface, user: UserInterface, event: EventInterface} {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

}
export default TicketsResource;