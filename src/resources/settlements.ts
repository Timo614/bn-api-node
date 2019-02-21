import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { DisplaySettlementInterface } from "../interfaces/resources/settlements.interface";

/**
 * @endpoint settlements
 * @url /settlements
 */
class SettlementsResource extends ResourceClass {
	constructor() {
		super("settlements");
	}

	/**
	 * Read a settlement
	 * @required {id:uuid}
	 * @auth true
	 * @url /settlements/{id}
	 */
	read(): DisplaySettlementInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			requiresAuth: false
		}) as any;
	}

	/**
	 * Delete a settlement
	 * @required {id:uuid}
	 * @auth true
	 * @returns {status: 200}
	 * @url /settlements/{id}
	 */
	del(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			requiresAuth: true
		}) as any;
	}
}

export default SettlementsResource;