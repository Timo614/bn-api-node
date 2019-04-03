import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { FeeScheduleInterface } from "../../interfaces/resources/fee-schedule.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.feeSchedules
 * @url /organizations/{organization_id}/fee_schedule
 */
class OrganizationFeeSchedulesResource extends ResourceClass {
	methodDefinitions = {
		create: this.create(),
		index: this.index(),
	};

	constructor() {
		super("organizations");
		this.buildAliases();
	}

	/**
	 * Create a fee schedule for an organization
	 * @auth true
	 * @params {organization_id: uuid, ...[[FeeScheduleInterface]]}
	 * @required {organization_id: uuid, name: string, ranges: Array<[[FeeScheduleRangeInterface]]>>}
	 * @url /organizations/{organization_id}/fee_schedule
	 */
	create(): FeeScheduleInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{organization_id}/fee_schedule",
			required: ["name", "ranges"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Get a list of fee schedules for the event
	 * @params {organization_id:uuid}
	 * @data Array<[[FeeScheduleInterface]]>
	 * @url /organizations/{organization_id}/fee_schedule
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/fee_schedule",
			required: [],
			requiresAuth: false
		}) as any;

	}

}

export default OrganizationFeeSchedulesResource;