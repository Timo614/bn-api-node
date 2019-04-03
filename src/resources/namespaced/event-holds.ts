import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { HoldInterface } from "../../interfaces/resources/hold.interface";

/**
 * @endpoint events.holds
 * @url /events/{event_id}/holds
 */
class EventHoldsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Get a list of holds for the events
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @data Array<[[HoldInterface]]>
	 * @url /events/{event_id}/holds
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{event_id}/holds",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a hold for an event
	 * @auth true
	 * @params {event_id:uuid, ...[[HoldInterface]]}
	 * @required {event_id:uuid, name: string, redemption_code: string, discount_in_cents: number}
	 * @url /events/{event_id}/holds
	 */
	create(): HoldInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{event_id}/holds",
			required: ["name", "redemption_code", "discount_in_cents"],
			requiresAuth: true
		}) as any;
	}

}

export default EventHoldsResource;