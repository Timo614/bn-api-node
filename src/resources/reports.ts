import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { ReportTransactionDetailsInterface } from "../interfaces/resources/reports/report-transaction-details.interface";

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
			path: "/{organization_id}/transaction_details",
			required: [],
			requiresAuth: true
		}) as any;
	}

}
export default ReportsResource;