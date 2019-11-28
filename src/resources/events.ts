import {
	createRequestMethod,
	RequestMethodInterface
} from "../interfaces/server/request-method.interface";
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
import EventFansResource from "./namespaced/event-fans";
import XhrClient from "../classes/xhr-client";
import { EventTypes } from "../interfaces/enums/events.enum";
import EventUsersResource from "./namespaced/event-users";
import EventBroadcastsResource from "./namespaced/event-broadcasts";
import EventReportSubscribersResource from "./namespaced/event-report-subscribers";
import EventReportSubscribersDeleteResource from "./namespaced/event-report-subscribers-delete";

/**
 * @endpoint events
 * @url /events
 */
class EventsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		checkins: this.checkins(),
		create: this.create(),
		update: this.update(),
		delete: this.delete(),
		cancel: this.cancel(),
		dashboard: this.dashboard(),
		read: this.read(),
		publish: this.publish(),
		unpublish: this.unpublish(),
		createLink: this.createLink(),
		ticketHolderCount: this.ticketHolderCount()
	};

	constructor() {
		super("events");
		this.buildAliases();
		this.namespaces = {
			artists: EventArtistsResource,
			codes: EventCodesResource,
			fans: EventFansResource,
			guests: EventGuestsResource,
			holds: EventHoldsResource,
			interests: EventInterestsResource,
			broadcasts: EventBroadcastsResource,
			ticketTypes: EventTicketTypesResource,
			tickets: EventTicketsResource,
			users: EventUsersResource,
			reports: EventReportSubscribersResource,
			subscribers: EventReportSubscribersDeleteResource
		};
	}

	/**
	 * List of events
	 * @auth false
	 * @params {...[[PagingInterface]], event_id?: string}
	 * @data Array<[[EventInterface]]>
	 * @url /events
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
	 * @url /events/checkins
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
	 * @required {name: string, organization_id: uuid, event_type: [[EventTypes]]}
	 * @url /events
	 */
	create(): EventInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["name", "organization_id", "event_type"],
			requiresAuth: true,
			beforeRequest(
				client: XhrClient,
				method: RequestMethodInterface,
				data: any,
				headers: any
			) {
				data.event_type = data.event_type || EventTypes.MUSIC;
			}
		}) as any;
	}

	/**
	 * Update an Event
	 * @auth true
	 * @params {...EventInterface}
	 * @required {id: uuid}
	 * @url /events/{id}
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
	 * @url /events/{id}
	 */
	cancel(): EventInterface {
		return createRequestMethod({
			name: "cancel",
			method: "DELETE",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete an event
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /events/{id}
	 */
	delete(): EventInterface {
		return createRequestMethod({
			names: ["delete", "del"],
			method: "DELETE",
			path: "/{id}/delete",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Dashboard for an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @url /events/{id}/dashboard
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
	 * Ticket holders for an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @url /events/{id}/ticket_holder_count
	 */
	ticketHolderCount() {
		return createRequestMethod({
			method: "GET",
			path: "/{id}/ticket_holder_count",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read an event
	 * @auth false
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @url /events/{id}
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
	 * @url /events/{id}/publish
	 */
	publish(): EventInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/publish",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Un-publish an event
	 * @auth true
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @returns {status: 200}
	 * @url /events/{id}/unpublish
	 */
	unpublish(): void {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/unpublish",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Creates a short link to the event with tracking data
	 * @auth true
	 * @params {id:uuid, source, medium, campaign, term, content}
	 * @required {id: uuid}
	 * @returns {status: 200}
	 * @url /events/{id}/links
	 */
	createLink(): void {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/links",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default EventsResource;
