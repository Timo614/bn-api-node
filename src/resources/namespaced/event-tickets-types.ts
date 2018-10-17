import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketTypeInterface } from "../../interfaces/resources/ticket-type.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.ticketTypes
 */
class EventTicketTypesResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * Create a ticket type
	 * @auth true
	 * @params {event_id:uuid, ...TicketInterface}
	 * @requires {event_id:uuid, name: string}
	 */
	create(): TicketTypeInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/ticket_types",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update a ticket type
	 * @auth true
	 * @params {event_id:uuid, id: uuid, ...TicketInterface}
	 * @requires {event_id:uuid, id:uuid, ...TicketInterface}
	 */
	update(): TicketTypeInterface {
		return createRequestMethod({
			name: "update",
			method: "PATCH",
			path: "/{event_id}/ticket_types/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get a list of ticket types for the event
	 * @auth false
	 * @params {event_id:uuid}
	 * @requires {event_id:uuid}
	 * @data Array<[[TicketTypeInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/ticket_types",
			required: [],
			requiresAuth: false
		}) as any;
	}
}

export default EventTicketTypesResource;