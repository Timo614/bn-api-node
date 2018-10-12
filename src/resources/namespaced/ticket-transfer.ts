import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketTransferAuthorizationInterface } from "../../interfaces/resources/ticket-transfer-authorization.interface";

/**
 * @endpoint tickets.transfer
 */
class TicketTransferResource extends ResourceClass {
	constructor() {
		super("tickets");
	}

	/**
	 * Send ticket(s) to another user
	 * @auth true
	 * @params {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 * @requires {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 */
	send(): TicketTransferAuthorizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "/transfer",
			required: ["ticket_ids", "validity_period_in_seconds"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Receive a ticket from another user
	 * @auth true
	 * @params {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 * @requires {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 */
	receive(): TicketTransferAuthorizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "/receive",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default TicketTransferResource;