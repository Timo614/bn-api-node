import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { OrganizationInterface } from "../interfaces/resources/organization.interface";
import OrganizationArtistsResource from "./namespaced/organization-artists";
import OrganizationEventsResource from "./namespaced/organization-events";
import OrganizationFeeSchedulesResource from "./namespaced/organization-fee-schedules";
import OrganizationInvitationsResource from "./namespaced/organization-invitations";
import OrganizationUsersResource from "./namespaced/organization-users";
import OrganizationVenueResource from "./namespaced/organization-venues";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";
import OrganizationFansResource from "./namespaced/organization-fans";

/**
 * @endpoint organizations
 * @url /organizations
 */
class OrganizationsResource extends ResourceClass {
	constructor() {
		super("organizations");
		this.namespaces = {
			artists: OrganizationArtistsResource,
			events: OrganizationEventsResource,
			fans: OrganizationFansResource,
			feeSchedules: OrganizationFeeSchedulesResource,
			invite: OrganizationInvitationsResource,
			users: OrganizationUsersResource,
			venues: OrganizationVenueResource,
		};
	}

	/**
	 * Get an organization
	 * @auth true
	 * @params {id}
	 * @required {id}
	 * @url /organizations/{id}
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
	 * @url /organizations/{id}
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
	 * @required {name: string}
	 * @url /organizations
	 */
	create(): OrganizationInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List organizations
	 * @auth true
	 * @data Array<[[OrganizationInterface]]>
	 * @url /organizations
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