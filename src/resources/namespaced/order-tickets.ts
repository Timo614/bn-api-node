import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

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
	index(): Array<IndexInterface> {
		return createRequestMethod({
			method: "GET",
			path: "/{order_id}/tickets",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default OrderTicketsResource;
