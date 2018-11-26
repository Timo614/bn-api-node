import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketRedeemableInterface } from "../../interfaces/resources/ticket-redeemable.interface";

/**
 * @endpoint tickets.redeem
 */
class TicketRedeemResource extends ResourceClass {
	constructor() {
		super("tickets");
	}

	/**
	 * View the redeemable ticket details
	 * @auth true
	 * @params {ticket_id:uuid}
	 * @required {ticket_id:uuid}
	 */
	read(): TicketRedeemableInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{ticket_id}/redeem",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default TicketRedeemResource;