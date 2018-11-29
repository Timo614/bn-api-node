
import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { OrganizationInterface } from "../../interfaces/resources/organization.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.fans
 */
class OrganizationFansResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * Read a fans profile from the organizations point of view.
	 * @params {organization_id: uuid, user_id: uuid}
	 * @required {organization_id: uuid, user_id: uuid}
	 * @TODO Create the Fan
	 */
	read(): any {
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
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			// path: "/{organization_id}/fans?query={q|}&page={page|0}&limit={limit|25}&sort={sort}&dir={dir|}",
			path: "/{organization_id}/fans",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default OrganizationFansResource;
