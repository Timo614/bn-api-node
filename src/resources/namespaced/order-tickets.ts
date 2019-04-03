import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketInterface } from "../../interfaces/resources/ticket.interface";

/**
 * @endpoint orders.tickets
 * @url /orders/{order_id}/tickets
 */
class OrderTicketsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index()
	};

	constructor() {
		super("orders");
		this.buildAliases();
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
