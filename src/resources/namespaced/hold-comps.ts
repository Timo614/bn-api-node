import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { CompInterface } from "../../interfaces/resources/comp.interface";

/**
 * @endpoint holds.comps
 * @url /holds/{hold_id}/comps
 */
class HoldCompsResource extends ResourceClass {
	constructor() {
		super("holds");
	}

	/**
	 * Get a list of comps from a hold
	 * @auth true
	 * @params {hold_id:uuid}
	 * @required {hold_id:uuid}
	 * @data Array<[[CompInterface]]>
	 * @url /holds/{hold_id}/comps
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
	 * @required {hold_id:uuid, name: string, quantity: number}
	 * @url /holds/{hold_id}/comps
	 */
	create(): CompInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{hold_id}/comps",
			required: ["name", "quantity"],
			requiresAuth: true
		}) as any;
	}

}

export default HoldCompsResource;