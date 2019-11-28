import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketCountSalesRowInterface } from "../../interfaces/resources/reports/report-ticket-count.interface";

/**
 * @endpoint event.report-subscribers
 * @url /event/{event_id}/report_subscribers
 */
class EventReportSubscribersResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create()
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * List users who've been added as subscribers to the ticket count report email
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @url /events/{event_id}/report_subscribers
	 */
	index(): TicketCountSalesRowInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{event_id}/report_subscribers",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a subscriber for the ticket count report email
	 * @auth true
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @url /events/{event_id}/report_subscribers
	 */
	create(): TicketCountSalesRowInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/report_subscribers",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default EventReportSubscribersResource;
