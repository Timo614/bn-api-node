import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

import { OrganizationInvitationInterface } from "../interfaces/resources/organization-invitation.interface";
import { TicketTypeInterface } from "../interfaces/resources/ticket-type.interface";

/**
 * @endpoint event-report-subscribers
 * @url /event_report_subscribers/{id}
 */
class EventReportSubscribersResource extends ResourceClass {
	methodDefinitions = {
		del: this.del(),
	};

	constructor() {
		super("event_report_subscribers");
		this.buildAliases();
	}

	/**
	 * List users who've been added as subscribers to the ticket count report email
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /event_report_subscribers/{id}
	 */
	del(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "DELETE",
			path: "/{id}",
			required: ["id"],
			requiresAuth: true
		}) as any;
	}

}

export default EventReportSubscribersResource;
