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
	 * Transfer ticket(s) to another user. Used for generating a QR.
	 * @auth true
	 * @params {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 * @required {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 */
	transfer(): TicketTransferAuthorizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "/transfer",
			required: ["ticket_ids", "validity_period_in_seconds"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Send ticket(s) to another user via email.
	 * @auth true
	 * @params {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number, email: string}
	 * @required {ticket_ids: Array<id:uuid>, validity_period_in_seconds: number}
	 */
	send(): TicketTransferAuthorizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "/send",
			required: ["ticket_ids", "validity_period_in_seconds", "email"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Receive a ticket from another user
	 * @auth true
	 * @params {transfer_key: uuid, sender_user_id:uuid, num_tickets: number, signature: string}
	 * @required {transfer_key: uuid, sender_user_id:uuid, num_tickets: number, signature: string}
	 */
	receive(): TicketTransferAuthorizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "/receive",
			required: ["transfer_key", "sender_user_id", "num_tickets", "signature"],
			requiresAuth: true
		}) as any;
	}
}

export default TicketTransferResource;
