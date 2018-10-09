import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { FeeScheduleInterface } from "../../interfaces/resources/fee-schedule.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

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
	 * @data Array<[[FeeScheduleInterface]]>
	 */
	index(): IndexInterface {
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