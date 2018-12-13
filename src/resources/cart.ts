import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { OrderInterface } from "../interfaces/resources/order.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint cart
 */
class CartResource extends ResourceClass {
	constructor() {
		super("cart");
	}

	/**
	 * Adds tickets to the users cart.
	 * @auth false
	 * @params {items: Array<[[CartItemInterface]]>}
	 * @required {items: Array<[[CartItemInterface]]>}
	 */
	update(): OrderInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["items"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Replaces the items of the user's cart
	 * @auth false
	 * @params {items: Array<[[CartItemInterface]]>}
	 * @required {items: Array<[[CartItemInterface]]>}
	 */
	replace(): OrderInterface {
		return createRequestMethod({
			method: "PUT",
			path: "",
			required: ["items"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Gets the user's current cart
	 * @auth false
	 * @alias index
	 */
	read(): OrderInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Delete all items from the user's cart
	 * @auth true
	 */
	del(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "",
			requiresAuth: true,
		}) as any;
	}

	/**
	 * Checkout the cart
	 * @params {amount: number, method: CheckoutMethodInterface}
	 * @required {method: CheckoutMethodInterface}
	 * @TODO Create a response type
	 * @TODO Create a request type
	 */
	checkout(): any {
		return createRequestMethod({
			method: "POST",
			path: "/checkout",
			required: ["method"],
			requiresAuth: false
		}) as any;
	}
}

export default CartResource;
