import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventInterestInterface } from "../../interfaces/resources/event-interest.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { CodeInterface } from "../../interfaces/resources/code.interface";

/**
 * @endpoint events.codes
 */
class EventCodesResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * List event codes users
	 * @auth true
	 * @params {event_id: uuid}
	 * @notimplemented {tags: {type: "Discount" | "Access"}}
	 * @required {event_id: uuid}
	 * @data Array<[[CodeInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{event_id}/codes",
			requiresAuth: true
		}) as any;
	}

	/**
	 * Add a code to an event
	 * @auth true
	 * @params {event_id: uuid}
	 * @required {event_id: uuid}
	 *
	 */
	create(): CodeInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/codes",
			requires: [
				"name",
				"redemption_code",
				"code_type",
				"max_uses",
				"discount_in_cents",
				"start_date",
				"end_date",
				"ticket_type_ids"
			],
			requiresAuth: true
		}) as any;
	}


}

export default EventCodesResource;