import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventInterestInterface } from "../../interfaces/resources/event-interest.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.interests
 */
class EventInterestsResource extends ResourceClass {
	constructor() {
		super("events");
	}



	/**
	 * List interested users
	 * @auth true
	 * @params {event_id: uuid}
	 * @required {event_id: uuid}
	 * @data Array<[[EventInterestInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{event_id}/interest",
			requiresAuth: true
		}) as any;
	}

	/**
	 * Add your interest to an event
	 * @auth true
	 * @params {event_id: uuid}
	 * @required {event_id: uuid}
	 */
	create(): EventInterestInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/interest",
			requiresAuth: true
		}) as any;
	}

	/**
	 * Remove your interest from an event
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 */
	del(): EventInterestInterface {
		return createRequestMethod({
			name: "remove",
			method: "DELETE",
			path: "/{event_id}/interest",
			requiresAuth: true
		}) as any;
	}
}

export default EventInterestsResource;