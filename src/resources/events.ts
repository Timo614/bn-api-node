import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { EventInterface } from "../interfaces/resources/event.interface";
import EventArtistsResource from "./namespaced/event-artists";
import EventInterestsResource from "./namespaced/event-interests";
import EventTicketTypesResource from "./namespaced/event-tickets-types";
import EventTicketsResource from "./namespaced/event-tickets";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import EventGuestsResource from "./namespaced/event-guests";
import EventHoldsResource from "./namespaced/event-holds";
import EventCodesResource from "./namespaced/event-codes";

/**
 * @endpoint events
 */
class EventsResource extends ResourceClass {
	constructor() {
		super("events");
		this.namespaces = {
			artists: EventArtistsResource,
			codes: EventCodesResource,
			guests: EventGuestsResource,
			holds: EventHoldsResource,
			interests: EventInterestsResource,
			ticketTypes: EventTicketTypesResource,
			tickets: EventTicketsResource,
		};
	}

	/**
	 * List of events
	 * @auth false
	 * @params {...[[PagingInterface]], event_id?: string}
	 * @data Array<[[EventInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Returns a list of events that the current user has access to scan at the door
	 * @auth true
	 * @params {...[[PagingInterface]]}
	 * @data Array<[[EventInterface]]>
	 */
	checkins(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/checkins",
			required: [],
			requiresAuth: true
		}) as any;
	}



	/**
	 * Create an event
	 * @auth true
	 * @params {EventInterface}
	 * @required {name: string, organization_id: uuid}
	 */
	create(): EventInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["name", "organization_id"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update an Event
	 * @auth true
	 * @params {...EventInterface}
	 * @required {id: uuid}
	 */
	update(): EventInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Cancel an event
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 */
	del(): EventInterface {
		return createRequestMethod({
			name: "cancel",
			method: "DELETE",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Dashboard for an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 */
	dashboard(): EventInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/dashboard",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 */
	read(): EventInterface {
		return createRequestMethod({
			name: "readFull",
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Publish an event
	 * @auth true
	 * @params {id:uuid}
	 * @required {id: uuid}
	 */
	publish(): EventInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/publish",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventsResource;