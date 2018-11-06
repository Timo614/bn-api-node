import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { OrganizationInterface } from "../interfaces/resources/organization.interface";
import OrganizationArtistsResource from "./namespaced/organization-artists";
import OrganizationEventsResource from "./namespaced/organization-events";
import OrganizationFeeSchedulesResource from "./namespaced/organization-fee-schedules";
import OrganizationInvitationsResource from "./namespaced/organization-invitations";
import OrganizationOwnersResource from "./namespaced/organization-owner";
import OrganizationUsersResource from "./namespaced/organization-users";
import OrganizationVenueResource from "./namespaced/organization-venues";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations
 */
class OrganizationsResource extends ResourceClass {
	constructor() {
		super("organizations");
		this.namespaces = {
			artists: OrganizationArtistsResource,
			events: OrganizationEventsResource,
			feeSchedules: OrganizationFeeSchedulesResource,
			invite: OrganizationInvitationsResource,
			owner: OrganizationOwnersResource,
			users: OrganizationUsersResource,
			venues: OrganizationVenueResource,
		};
	}

	/**
	 * Get an organization
	 * @auth true
	 * @params {id}
	 * @required {id}
	 */
	read(): OrganizationInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update a single organization
	 * @auth true
	 * @params {id: uuid, ...OrganizationInterface}
	 * @required {id: uuid}
	 */
	update(): OrganizationInterface {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create an organization
	 * @auth true
	 * @params {...OrganizationInterface}
	 * @required {owner_user_id: uuid, name: string}
	 */
	create(): OrganizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["owner_user_id", "name"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List organizations
	 * @auth true
	 * @data Array<[[OrganizationInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: true
		}) as any;
	}
}
export default OrganizationsResource;