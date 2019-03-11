import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { ReportTransactionDetailsInterface } from "../interfaces/resources/reports/report-transaction-details.interface";
import {
	EventSummaryFeesRowInterface, EventSummaryOtherFeesInterface,
	EventSummarySalesRowInterface
} from "../interfaces/resources/reports/report-event-summary.interface";
import {
	TicketCountRowInterface,
	TicketCountSalesRowInterface
} from "../interfaces/resources/reports/report-ticket-count.interface";

/**
 * @endpoint reports
 * @url /reports
 */

class ReportsResource extends ResourceClass {
	constructor() {
		super("reports");
	}

	/**
	 * Get transaction details report
	 * @auth true
	 * @params {organization_id:uuid, event_id?: uuid, start_utc?: Date, end_utc?: Date}
	 * @required {organization_id:uuid}
	 * @url /reports/{organization_id}?report=transaction_details
	 */
	transactionDetails(): Array<ReportTransactionDetailsInterface> {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}?report=transaction_details",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get event summary report
	 * @auth true
	 * @params {organization_id:uuid, event_id: uuid, start_utc?: Date, end_utc?: Date}
	 * @required {organization_id:uuid, event_id: uuid,}
	 * @url /reports/{organization_id}?report=event_summary
	 */
	eventSummary(): { sales: Array<EventSummarySalesRowInterface>, ticket_fees: Array<EventSummaryFeesRowInterface>, other_fees: Array<EventSummaryOtherFeesInterface> } {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}?report=event_summary",
			required: ["event_id"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Get ticket count report
	 * @auth true
	 * @params {organization_id:uuid, event_id?: uuid}
	 * @required {organization_id:uuid}
	 * @url /reports/{organization_id}?report=ticket_count
	 */
	ticketCount(): { organization_id: { event_id: { ticket_type_id: { sales: TicketCountSalesRowInterface, totals: TicketCountRowInterface } } } } {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}?report=ticket_count",
			required: [],
			requiresAuth: true
		}) as any;
	}



	/**
	 * Get weekly settlement report
	 * @auth true
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @url /reports/{organization_id}?report=weekly_settlement
	 */
	weeklySettlement(): { event_id: string, sales: Array<EventSummarySalesRowInterface>, ticket_fees: Array<EventSummaryFeesRowInterface>, other_fees: Array<EventSummaryOtherFeesInterface> } {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}?report=weekly_settlement",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default ReportsResource;