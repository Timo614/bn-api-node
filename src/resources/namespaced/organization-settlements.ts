import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { VenueInterface } from "../../interfaces/resources/venue.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.venues
 * @url /organizations/{organization_id}/settlements
 */
class OrganizationSettlementsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index()
	};

	constructor() {
		super("organizations");
		this.buildAliases();
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
