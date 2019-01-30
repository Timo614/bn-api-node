import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { VenueInterface } from "../../interfaces/resources/venue.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.venues
 * @url /organizations/{organization_id}/venues
 */
class OrganizationVenueResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Add a venue to the organization
	 * @params {organization_id:uuid, ...VenueInterface}
	 * @required {organization_id:uuid, ...VenueInterface}
	 * @url /organizations/{organization_id}/venues
	 */
	create(): VenueInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{organization_id}/venues",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List venues in the organization
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[VenueInterface]]>
	 * @url /organizations/{organization_id}/venues
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/venues",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationVenueResource;
