import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { OrderInterface } from "../interfaces/resources/order.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import OrderTicketsResource from "./namespaced/order-tickets";
import { RefundResponseInterface } from "../interfaces/resources/refund-response.interface";
import { OrderDetailsInterface } from "../interfaces/resources/order-details.interface";

/**
 * @endpoint orders
 */
class OrdersResource extends ResourceClass {
	constructor() {
		super("orders");
		this.namespaces = {
			tickets: OrderTicketsResource,
		}
	}

	/**
	 * List orders for user
	 * @auth true
	 * @data Array<[[OrderInterface]]>
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
	 * Read an order
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 */
	read(): OrderInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update an order
	 * @auth true
	 * @params {id:uuid, note: string}
	 * @required {id:uuid}
	 */
	update(): OrderInterface {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get details for an order
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 */
	details(): OrderDetailsInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/details",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a refund
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 */
	refund(): RefundResponseInterface {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}/refund",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrdersResource;