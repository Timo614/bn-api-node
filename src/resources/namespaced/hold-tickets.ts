import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";

/**
 * @endpoint holds.tickets
 */
class HoldTicketsResource extends ResourceClass {
	constructor() {
		super("holds");
	}



	/**
	 * Update the ticket allocation for this hold
	 * @auth true
	 * @params {hold_id:uuid, items: Array<[[CartItemInterface]]>}
	 * @required {hold_id:uuid, items: Array<[[CartItemInterface]]>}
	 * @returns status 200
	 */
	update(): void {
		return createRequestMethod({
			method: "PUT",
			path: "/{hold_id}/tickets",
			required: ["items"],
			requiresAuth: true
		}) as any;
	}
}

export default HoldTicketsResource;