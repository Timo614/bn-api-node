import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { ReportTransactionDetailsInterface } from "../interfaces/resources/reports/report-transaction-details.interface";
import {
	EventSummaryFeesRowInterface, EventSummaryOtherFeesInterface,
	EventSummarySalesRowInterface
} from "../interfaces/resources/reports/report-event-summary.interface";

/**
 * @endpoint reports
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
	 */
	eventSummary(): { sales: Array<EventSummarySalesRowInterface>, ticket_fees: Array<EventSummaryFeesRowInterface>, other_fees: Array<EventSummaryOtherFeesInterface> } {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}?report=event_summary",
			required: ["event_id"],
			requiresAuth: true
		}) as any;
	}

}

export default ReportsResource;