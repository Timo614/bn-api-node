import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketRedeemableInterface } from "../../interfaces/resources/ticket-redeemable.interface";

/**
 * @endpoint tickets.redeem
 */
class TicketsRedeemResource extends ResourceClass {
	constructor() {
		super("tickets");
	}

	/**
	 * View the redeemable ticket details
	 * @auth true
	 * @params {ticket_id:uuid}
	 * @requires {ticket_id:uuid}
	 */
	read(): TicketRedeemableInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{ticket_id}/redeem",
			required: ["ticket_id"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Redeem a ticket
	 * @auth true
	 * @params {ticket_id:uuid, redeem_key: string}
	 * @requires {ticket_id:uuid, redeem_key: string}
	 */
	redeem(): {success: boolean, message?: string} {
		return createRequestMethod({
			method: "POST",
			path: "/{ticket_id}/redeem",
			required: ["ticket_id", "redeem_key"],
			requiresAuth: true
		}) as any;
	}
}

export default TicketsRedeemResource;