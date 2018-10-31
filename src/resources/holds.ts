import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import HoldTicketsResource from "./namespaced/hold-tickets";
import { HoldInterface } from "../interfaces/resources/hold.interface";
import HoldCompsResource from "./namespaced/hold-comps";

/**
 * @endpoint holds
 */

class HoldsResource extends ResourceClass {
	constructor() {
		super("holds");
		this.namespaces = {
			comps: HoldCompsResource,
			tickets: HoldTicketsResource,
		}
	}

	/**
	 * Update the hold details
	 * @auth true
	 * @params {id:uuid, ...[[HoldInterface]]}
	 * @requires {id:uuid}
	 * @return {status: 200}
	 */
	update(): void {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			requireOne: ["name", "discount_in_cents", "redemption_code", "end_at", "max_per_order"],
			requiresAuth: true
		}) as any;
	}

	/**
     * Update the hold details
     * @auth true
     * @params {id:uuid}
     * @requires {id:uuid}
     * @return [[HoldInterface]]
     */
	read(): HoldInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
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

	/**
	 * Splits a hold into two
	 * @auth true
	 * @params {id:uuid,...[[HoldInterface]]}
	 * @requires {hold_id:uuid, name: string, redemption_code: string, discount_in_cents: number, hold_type: string, quantity: number}
	 * @return [[HoldInterface]]
	 */
	split(): HoldInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/split",
			required: ["name", "redemption_code", "discount_in_cents", "quantity", "hold_type"],
			requiresAuth: true
		}) as any;
	}

}
export default HoldsResource;