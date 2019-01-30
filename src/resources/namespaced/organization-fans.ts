
import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { FanInterface } from "../../interfaces/resources/fan.interface";

/**
 * @endpoint organizations.fans
 * @url /organizations/{organization_id}/fans
 */
class OrganizationFansResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Read a fans profile from the organizations point of view.
	 * @params {organization_id: uuid, user_id: uuid}
	 * @required {organization_id: uuid, user_id: uuid}
	 * @url /organizations/{organization_id}/fans/{user_id}
	 */
	read(): FanInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/fans/{user_id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List fans in the organization
	 * @params {...[[PagingInterface]], organization_id:uuid, sort?: string [FirstName, LastName, Email, Phone, Orders, FirstOrder, LastOrder, Revenue] }
	 * @required {organization_id:uuid}
	 * @data Array<[[OrganizationFanInterface]]>
	 * @url /organizations/{organization_id}/fans
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/fans",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List a specific fans history for an organization
	 * @params {...[[PagingInterface]], organization_id:uuid, user_id:uuid}
	 * @required {organization_id:uuid, user_id: uuid}
	 * @data Array<[[FanHistoryItemInterface]]>
	 * @url /organizations/{organization_id}/fans/{user_id}/history
	 */
	history(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{organization_id}/fans/{user_id}/history",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationFansResource;
