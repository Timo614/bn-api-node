import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketTransferAuthorizationInterface } from "../../interfaces/resources/ticket-transfer-authorization.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { TicketInterface } from "../../interfaces/resources/ticket.interface";

/**
 * @endpoint orders.tickets
 * @url /orders/{order_id}/tickets
 */
class OrderTicketsResource extends ResourceClass {
	constructor() {
		super("orders");
	}

	/**
	 * Gets the users tickets
	 * @auth true
	 * @params {order_id: uuid}
	 * @required {order_id: uuid}
	 * @url /orders/{order_id}/tickets
	 */
	index(): Array<TicketInterface> {
		return createRequestMethod({
			method: "GET",
			path: "/{order_id}/tickets",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default OrderTicketsResource;
