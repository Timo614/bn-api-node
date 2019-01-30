import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.events
 * @url /organizations/{organization_id}/events
 */
class OrganizationEventsResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * List the events that are a part of this organization
	 * @auth true
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[EventInterface]]>
	 * @url /organizations/{organization_id}/events
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/events",
			required: [],
			requiresAuth: true
		}) as any;
	}




}
export default OrganizationEventsResource;
