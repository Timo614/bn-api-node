import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketTypeInterface } from "../../interfaces/resources/ticket-type.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint events.ticketTypes
 * @url /events/{event_id}/ticket_types
 */
class EventTicketTypesResource extends ResourceClass {
	methodDefinitions = {
		create: this.create(),
		create_multiple: this.create_multiple(),
		update: this.update(),
		index: this.index(),
		cancel: this.cancel(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Create a ticket type
	 * @auth true
	 * @params {event_id:uuid, ...[[TicketTypeInterface]]}
	 * @required {event_id:uuid, name: string, price_in_cents: number, limit_per_person: number, start_date: Date, end_date: Date, visibility: string}
	 * @url /events/{event_id}/ticket_types
	 */
	create(): TicketTypeInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/ticket_types",
			required: ["name", "price_in_cents", "start_date", "end_date_type", "limit_per_person", "visibility"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create multiple ticket types in one go
	 * @auth true
	 * @params {event_id:uuid, ticket_types: Array<...[[TicketTypeInterface]]>}
	 * @required {event_id: uuid, ticket_types: Array<...[[TicketTypeInterface]]>}
	 * @url /events/{event_id}/ticket_types/multiple
	 */
	create_multiple(): [{id: string}] {
		return createRequestMethod({
			method: "POST",
			path: "/{event_id}/ticket_types/multiple",
			required: ["ticket_types"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update a ticket type
	 * @auth true
	 * @params {event_id:uuid, id: uuid, ...[[TicketTypeInterface]]}
	 * @required {event_id:uuid, id:uuid, ...[[TicketTypeInterface]]}
	 * @url /events/{event_id}/ticket_types/{id}
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
	 * @required {event_id:uuid}
	 * @data Array<[[TicketTypeInterface]]>
	 * @url /events/{event_id}/ticket_types
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

	/**
	 * Cancel a ticket type
	 * @auth false
	 * @params {event_id:uuid, ticket_type_id: uuid}
	 * @required {event_id:uuid, ticket_type_id: uuid}
	 * @data Array<[[TicketTypeInterface]]>
	 * @url /events/{event_id}/ticket_types/{ticket_type_id}
	 */
	cancel(): IndexInterface {
		return createRequestMethod({
			name: "del",
			method: "DELETE",
			path: "/{event_id}/ticket_types/{ticket_type_id}",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventTicketTypesResource;
