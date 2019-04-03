import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint redemption_codes
 * @url /redemption_codes
 */

class RedemptionCodesResource extends ResourceClass {
	methodDefinitions = {
		read: this.read()
	};

	constructor() {
		super("redemption_codes");
		this.buildAliases();
	}

	/**
	 * Get a hold or comp details from a redemption code
	 * @auth false
	 * @params {code:string}
	 * @required {code:string}
	 * @data [[RedemptionCodeInterface]]
	 * @url /redemption_codes/{code}
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
