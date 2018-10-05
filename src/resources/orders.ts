import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { OrderInterface } from "../interfaces/resources/order.interface";

/**
 * @endpoint orders
 */
class OrdersResource extends ResourceClass {
	constructor() {
		super("orders");
	}

	/**
	 * List orders for user
	 * @auth true
	 */
	index(): Array<OrderInterface> {
		return createRequestMethod({
			method: "GET",
			path: "",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read an order
	 * @auth true
	 * @params {id:uuid}
	 * @requires {id:uuid}
	 */
	read(): OrderInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}) as any;
	}
}

export default OrdersResource;