import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import { createRequestMethod } from "../interfaces/server/request-method.interface";

class PublicResource extends ResourceClass {
	methodDefinitions = {
		tickets: this.tickets()
	};

	constructor() {
		super("public");
		this.buildAliases();
	}

	/**
	 * List of tickets on an order via a public address. The signature grants
	 * a user with the link the right to redeem them. At a later stage it may
	 * also be used to transfer tickets
	 * @auth false
	 * @params: {event_id, order_id, for_id, signature}
	 * @data Array<TicketInterface>
	 * @url /public/tickets
	 */
	tickets(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/tickets",
			required: ["event_id", "order_id", "for_id", "signature"],
			requiresAuth: false
		}) as any;
	}
}

export default PublicResource;
