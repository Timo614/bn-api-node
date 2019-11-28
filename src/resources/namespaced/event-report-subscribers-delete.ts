import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

import { OrganizationInvitationInterface } from "../../interfaces/resources/organization-invitation.interface";
import { TicketTypeInterface } from "../../interfaces/resources/ticket-type.interface";

/**
 * @endpoint report-subscribers
 * @url /event_report_subscribers/{event_id}
 */
class EventReportSubscribersDeleteResource extends ResourceClass {
	methodDefinitions = {
		delete: this.delete(),
	};

	constructor() {
		super("event_report_subscribers");
		this.buildAliases();
	}

	/**
	 * List users who've been added as subscribers to the ticket count report email
	 * @params {event_id:uuid}
	 * @required {event_id:uuid}
	 * @url /events/{event_id}/report_subscribers
	 */
	delete(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "DELETE",
			path: "/{event_id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default EventReportSubscribersDeleteResource;
