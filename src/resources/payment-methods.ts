import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint paymentMethods
 * @url /payment_methods
 */
class PaymentMethodsResource extends ResourceClass {
	constructor() {
		super("payment_methods");
	}

	/**
	 * Check the status of the server
	 * @auth true
	 * @data Array<[[PaymentMethodsInterface]]>
	 * @url /payment_methods
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "",
			requiresAuth: true
		}) as any;
	}
}
export default PaymentMethodsResource;