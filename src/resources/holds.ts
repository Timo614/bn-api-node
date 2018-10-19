import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint holds
 */

class HoldsResource extends ResourceClass {
	constructor() {
		super("holds");
	}

	/**
	 * Add or remove tickets to a hold
	 * @auth true
	 * @params {hold_id:uuid, items: Array<[[CartItemInterface]]>}
	 * @requires {hold_id:uuid,  items: Array<[[CartItemInterface]]>}
	 * @return {status: 200}
	 */
	update(): void {
		return createRequestMethod({
			method: "PUT",
			path: "/{hold_id}/tickets",
			required: ["items"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get a list of tickets in a hold
	 * @auth true
	 * @params {hold_id:uuid}
	 * @requires {hold_id:uuid}
	 * @data Array<[[CartItemInterface]]>
	 */
	// index(): IndexInterface {
	// 	return createRequestMethod({
	// 		method: "GET",
	// 		path: "/{hold_id}/tickets",
	// 		required: [],
	// 		requiresAuth: true
	// 	}) as any;
	// }



}
export default HoldsResource;