import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
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
		}
	}

	/**
	 * Update the hold details
	 * @auth true
	 * @params {id:uuid, ...[[HoldInterface]]}
	 * @required {id:uuid}
	 * @return {status: 200}
	 */
	update(): void {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			requireOne: ["name", "discount_in_cents", "redemption_code", "end_at", "max_per_order", "hold_type", "quantity"],
			requiresAuth: true
		}) as any;
	}

	/**
     * Update the hold details
     * @auth true
     * @params {id:uuid}
     * @required {id:uuid}
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
	 * Delete the hold
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @return {status: 200}
	 */
	delete(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			requiresAuth: true
		}) as any;
	}
	/**
	 * Get a list of tickets in a hold
	 * @auth true
	 * @params {hold_id:uuid}
	 * @required {hold_id:uuid}
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
	 * @required {hold_id:uuid, name: string, redemption_code: string, discount_in_cents: number, hold_type: string, quantity: number}
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