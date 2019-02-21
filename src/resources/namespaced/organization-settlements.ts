import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { VenueInterface } from "../../interfaces/resources/venue.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.venues
 * @url /organizations/{organization_id}/settlements
 */
class OrganizationSettlementsResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Prepare a settlement, get the pending values for the date range
	 * @params {organization_id:uuid, ...[[NewSettlementRequestInterface]]}
	 * @required {organization_id:uuid, start_utc: Date, end_utc: Date }
	 * @url /organizations/{organization_id}/settlements/prepare
	 */
	prepare(): VenueInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/settlements/prepare",
			required: ["start_utc", "end_utc"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Add a settlement to the organization
	 * @params {organization_id:uuid, ...[[NewSettlementRequestInterface]]}
	 * @required {organization_id:uuid, start_utc: Date, end_utc: Date}
	 * @url /organizations/{organization_id}/settlements
	 */
	create(): VenueInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{organization_id}/settlements",
			required: ["start_utc", "end_utc"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List settlements in the organization
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[SettlementsInterface]]>
	 * @url /organizations/{organization_id}/settlements
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/settlements",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationSettlementsResource;
