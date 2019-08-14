import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { OrderInterface } from "../interfaces/resources/order.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import OrderTicketsResource from "./namespaced/order-tickets";
import { RefundResponseInterface } from "../interfaces/resources/refund-response.interface";
import { OrderDetailsInterface } from "../interfaces/resources/order-details.interface";
import { SendPublicRedeemLinkResultInterface } from "../interfaces/resources/send-redeem-link.interface";

/**
 * @endpoint orders
 * @url /orders
 */
class OrdersResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		read: this.read(),
		update: this.update(),
		details: this.details(),
		refund: this.refund(),
		activity: this.activity(),
		sendPublicRedeemLink: this.sendPublicRedeemLink()
	};

	constructor() {
		super("orders");
		this.buildAliases();
		this.namespaces = {
			tickets: OrderTicketsResource
		};
	}

	/**
	 * List orders for user
	 * @auth true
	 * @data Array<[[OrderInterface]]>
	 * @url /orders
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
	 * @url /orders/{id}
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
	 * @url /orders/{id}
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
	 * @url /orders/{id}/details
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
	 * @params {id:uuid, items: Array<[[RefundItemInterface]]>}
	 * @required {id:uuid, items: Array<[[RefundItemInterface]]>}
	 * @url /orders/{id}/refund
	 */
	refund(): RefundResponseInterface {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}/refund",
			required: ["items"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get activities for an order
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /orders/{id}/activity
	 */
	activity(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/activity",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Send a link to a public page that can generate the redeem codes for a public recipient
	 * @auth true
	 * @params {email_or_phone: string}
	 * @required {email_or_phone: string}
	 * @url /orders/{id}/send_public_redeem_link
	 */
	sendPublicRedeemLink(): SendPublicRedeemLinkResultInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/send_public_redeem_link",
			required: ["email_or_phone"],
			requiresAuth: true
		}) as any;
	}
}

export default OrdersResource;
