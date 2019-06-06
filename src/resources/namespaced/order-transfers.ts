import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint orders.transfers
 * @url /orders/{order_id}/transfers
 */
class OrderTransferResource extends ResourceClass {
	methodDefinitions = {
		index: this.index()
	};

	constructor() {
		super("transfers");
		this.buildAliases();
	}

	/**
	 * Gets the transfers for an order
	 * @auth true
	 * @params {order_id: uuid}
	 * @required {order_id: uuid}
	 * @url /orders/{order_id}/transfers
	 * @returns [[Array<TransferInterface>]]
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{order_id}/transfers",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default OrderTransferResource;
