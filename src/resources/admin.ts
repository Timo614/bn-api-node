import { createRequestMethod, RequestMethodInterface } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import {
	TicketCountRowInterface,
	TicketCountSalesRowInterface
} from "../interfaces/resources/reports/report-ticket-count.interface";

/**
 * @endpoint admin
 * @url /admin
 */
class AdminResource extends ResourceClass {

	methodDefinitions = {
		ticketCount: this.ticketCount(),
		stuckDomainActions: this.stuckDomainActions()
	};

	constructor() {
		super("admin");
		this.buildAliases();
	}


	/**
	 * Get ticket count report for entire org
	 * @auth true
	 * @url /admin/ticket_count
	 */
	ticketCount(): { sales: [TicketCountSalesRowInterface], counts: [TicketCountRowInterface] } {
		return createRequestMethod({
			method: "GET",
			path: "/ticket_count",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get a list of stuck domain actions
	 * @auth true
	 * @url /admin/stuck_domain_actions
	 */
	stuckDomainActions(): any {
		return createRequestMethod({
			method: "GET",
			path: "/stuck_domain_actions",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default AdminResource;