import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { CompInterface } from "../../interfaces/resources/comp.interface";

/**
 * @endpoint holds.comps
 */
class HoldCompsResource extends ResourceClass {
	constructor() {
		super("holds");
	}

	/**
	 * Get a list of comps from a hold
	 * @auth true
	 * @params {hold_id:uuid}
	 * @requires {hold_id:uuid}
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{hold_id}/comps",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a comp for a hold
	 * @auth true
	 * @params {hold_id:uuid, ...[[CompInterface]]}
	 * @requires {hold_id:uuid, name: string, quantity: number}
	 */
	create(): CompInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{hold_id}/comps",
			required: ["name", "quantity"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read a comp for a hold
	 * @auth true
	 * @params {hold_id:uuid, id:uuid}
	 * @requires {hold_id:uuid, id:uuid}
	 */
	read(): CompInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{hold_id}/comps/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update a comp for a hold
	 * @auth true
	 * @params {hold_id:uuid, id:uuid, ...[[CompInterface]]}
	 * @requires {hold_id:uuid, id:uuid}
	 * @requireOne {...[[CompInterface]]}
	 */
	update(): CompInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{hold_id}/comps/{id}",
			requireOne: ["name", "email", "phone", "quantity"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a comp from a hold
	 * @auth true
	 * @params {hold_id:uuid, id:uuid}
	 * @requires {hold_id:uuid, id:uuid}
	 * @returns {status: 200}
	 */
	del(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{hold_id}/comps/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default HoldCompsResource;