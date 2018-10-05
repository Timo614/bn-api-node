import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import { ResourceInterface } from "../../interfaces/server/resource";
import ResourceClass from "../../classes/abstracts/resource.class";
import { TicketTypeInterface } from "../../interfaces/resources/ticket-type.interface";
import { FeeScheduleInterface } from "../../interfaces/resources/fee-schedule.interface";

/**
 * @endpoint organizations.feeSchedules
 */
class OrganizationFeeSchedulesResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Create a ticket type
	 * @auth true
	 * @params {organization_id: uuid, TicketTypeInterface}
	 */
	create(): FeeScheduleInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{organization_id}/fee_schedule",
			required: ["organization_id", "name", "ranges"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Get a list of fee schedules for the event
	 * @params {organization_id:uuid}
	 */
	index(): Array<FeeScheduleInterface> {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/fee_schedule",
			required: ["organization_id"],
			requiresAuth: false
		}) as any;

	}

}

export default OrganizationFeeSchedulesResource;