import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint transfers
 * @url /transfers/
 */
class TransfersResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		cancel: this.cancel()
	};

	constructor() {
		super("transfers");
		this.buildAliases();
	}

	/**
	 * Cancel a transfer.
	 * @auth true
	 * @params {source_or_destination?: "source|destination", start_utc?: Date, end_utc?: Date}
	 * @returns [[TransferInterface]]
	 * @url /transfers
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "",
			requiresAuth: true
		}) as any;
	}

	/**
	 * Cancel transfering of a ticket to another user.
	 * @auth true
	 * @params {id: uuid}
	 * @required {id: uuid}
	 * @url /tickets/{id}
	 */
	cancel(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default TransfersResource;
