import { createRequestMethod, RequestMethodInterface } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventInterestInterface } from "../../interfaces/resources/event-interest.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { CodeInterface } from "../../interfaces/resources/code.interface";
import XhrClient from "../../classes/xhr-client";

/**
 * @endpoint events.codes
 * @url /events/{event_id}/codes
 */
class EventCodesResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * List event codes users
	 * @auth true
	 * @params {event_id: uuid}
	 * @notimplemented {tags: {type: "Discount" | "Access"}}
	 * @required {event_id: uuid}
	 * @data Array<[[CodeInterface]]>
	 * @url /events/{event_id}/codes
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
	 * @url /events/{event_id}/codes
	 */
	create(): CodeInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/codes",
			requires: [
				"name",
				"redemption_codes",
				"code_type",
				"max_uses",
				"start_date",
				"end_date",
				"ticket_type_ids"
			],
			requireOne: ["discount_in_cents", "discount_as_percentage"],
			requiresAuth: true,
			beforeRequest(client: XhrClient, method: RequestMethodInterface, data: any, headers: any) {
				if (data.code_type === "Access") {
					data.discount_in_cents = 0;
					return true;
				}
				let discountInCents = data.discount_in_cents;
				let discountAsPercentage = data.discount_as_percentage;

				if ((!discountInCents && !discountAsPercentage) || (discountInCents && discountAsPercentage)) {
					throw { error: { "message": "You must enter either discount_in_cents or discount_as_percentage" } };
				}
			},

		}) as any;
	}
}

export default EventCodesResource;
