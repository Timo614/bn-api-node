import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { AdjustmentsInterface } from "../../interfaces/resources/adjustments.interface";

/**
 * @endpoint settlements.adjustments
 * @url /settlements/{id}/adjustments
 */
class SettlementsAdjustmentsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create()
	};

	constructor() {
		super("settlements");
		this.buildAliases();
	}

	/**
	 * Read an adjustment
	 * @required {id:uuid}
	 * @auth true
	 * @url /settlements/{settlement_id}/adjustments
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{settlement_id}/adjustments",
			requiresAuth: true
		}) as any;
	}


	/**
	 * Create an adjustment
	 * @auth true
	 * @params {...AdjustmentsInterface}
	 * @required {name: string}
	 * @url /settlements/{settlement_id}/adjustments
	 */
	create(): AdjustmentsInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{settlement_id}/adjustments",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default SettlementsAdjustmentsResource;
