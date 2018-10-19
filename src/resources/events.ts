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

/**
 * @endpoint events
 */
class EventsResource extends ResourceClass {
	constructor() {
		super("events");
		this.namespaces = {
			artists: EventArtistsResource,
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
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Create an event
	 * @auth true
	 * @params {EventInterface}
	 * @requires {name: string, organization_id: uuid}
	 */
	create(): EventInterface {
		return createRequestMethod({
			name: "create",
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
	 * @requires {id: uuid}
	 */
	update(): EventInterface {
		return createRequestMethod({
			name: "update",
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
	 * @requires {id:uuid}
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
	 * Read an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 */
	read(): EventInterface {
		return createRequestMethod({
			name: "read",
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

// export default {
// 	path: "events",
//
// 	methods: [
//
//
// 	]
// 		.concat(EventArtist.methods)
// 		.concat(EventInterest.methods)
// 		.concat(EventTicket.methods)
// } as ResourceInterface;
