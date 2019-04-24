import { createRequestMethod, RequestMethodInterface } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { HoldChildInterface } from "../../interfaces/resources/hold-child.interface";
import XhrClient from "../../classes/xhr-client";

/**
 * @endpoint holds.children
 * @url /holds/{hold_id}/children
 */
class HoldChildrenResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create(),
	};

	constructor() {
		super("holds");
		this.buildAliases();
	}

	/**
	 * Get a list of children from a hold
	 * @auth true
	 * @params {hold_id:uuid}
	 * @required {hold_id:uuid}
	 * @data Array<[[HoldChildInterface]]>
	 * @url /holds/{hold_id}/children
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{hold_id}/children",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a child for a hold
	 * @auth true
	 * @params {hold_id:uuid, ...[[HoldChildInterface]]}
	 * @required {hold_id:uuid, name: string, quantity: number, hold_type: string}
	 * @url /holds/{hold_id}/children
	 */
	create(): HoldChildInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/split",
			required: ["name", "quantity", "hold_type"],
			requiresAuth: true,
			beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any) {
				data.child = true;
			}
		}) as any;
	}

}

export default HoldChildrenResource;