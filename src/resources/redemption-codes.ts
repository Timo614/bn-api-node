import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import { RedemptionCodeInterface } from "../interfaces/resources/redemption-code.interface";
import HoldCompsResource from "./namespaced/hold-comps";

/**
 * @endpoint redemption_codes
 */

class RedemptionCodesResource extends ResourceClass {
	constructor() {
		super("redemption_codes");
		this.namespaces = {};
	}

	/**
	 * Get a hold or comp details from a redemption code
	 * @auth false
	 * @params {code:string}
	 * @required {code:string}
	 * @data [[RedemptionCodeInterface]]
	 */
	read(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{code}",
			required: [],
			requiresAuth: false
		}) as any;
	}
}
export default RedemptionCodesResource;
