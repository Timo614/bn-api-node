import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import { HoldInterface } from "../interfaces/resources/hold.interface";
import HoldChildrenResource from "./namespaced/hold-children";
import { LinkInterface } from "../interfaces/resources/structures/link.interface";

/**
 * @endpoint holds
 * @url /holds
 */

class HoldsResource extends ResourceClass {
	methodDefinitions = {
		update: this.update(),
		read: this.read(),
		delete: this.delete(),
		split: this.split()
	};

	constructor() {
		super("holds");
		this.buildAliases();
		this.namespaces = {
			children: HoldChildrenResource
		};
	}

	/**
	 * Update the hold details
	 * @auth true
	 * @params {id:uuid, ...[[HoldInterface]]}
	 * @required {id:uuid}
	 * @return {status: 200}
	 * @url /holds/{id}
	 */
	update(): void {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			requireOne: [
				"name",
				"discount_in_cents",
				"redemption_code",
				"end_at",
				"max_per_order",
				"hold_type",
				"quantity"
			],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update the hold details
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @return [[HoldInterface]]
	 * @url /holds/{id}
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
	 * @url /holds/{id}
	 */
	delete(): void {
		return createRequestMethod({
			name: "del",
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
	 * @url /holds/{id}/tickets
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
	 * @url /holds/{id}/split
	 */
	split(): HoldInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/split",
			required: [
				"name",
				"redemption_code",
				"discount_in_cents",
				"quantity",
				"hold_type"
			],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Gets a shortened, deep link to the event page
	 * with the redemption code for the hold already applied
	 * to the cart
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /holds/{id}/link
	 */
	link(): LinkInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/link",
			required: [],
			requiresAuth: true
		}) as any;
	}
}
export default HoldsResource;
