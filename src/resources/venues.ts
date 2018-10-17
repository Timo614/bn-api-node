import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import VenueEventsResource from "./namespaced/venue-events";
import { VenueInterface } from "../interfaces/resources/venue.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint venues
 */
class VenuesResource extends ResourceClass {
	constructor() {
		super("venues");
		this.namespaces = {
			events: VenueEventsResource,
		}
	}

	/**
	 * Add a venue to an organization
	 * @auth true
	 * @params {id: uuid, organization_id: uuid}
	 * @requires {id: uuid, organization_id: uuid}
	 */
	addToOrganization(): VenueInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{id}/organizations",
			required: ["organization_id"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Toggle venue privacy
	 * @auth true
	 * @params {id: uuid}
	 * @requires {id: uuid}
	 */
	togglePrivacy(): VenueInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}/toggle_privacy",
			required: [],
			requiresAuth: true
		}) as any;
	}


	/**
	 * Get an venue
	 * @auth true
	 * @params {id}
	 * @requires {id}
	 */
	read(): VenueInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update a single venue
	 * @auth true
	 * @params {id: uuid, ...VenueInterface}
	 * @requires {id: uuid}
	 */
	update(): VenueInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create an venue
	 * @auth true
	 * @params {...VenueInterface}
	 * @required {owner_user_id: uuid, name: string}
	 */
	create(): VenueInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List venues
	 * @auth true
	 * @data Array<[[VenueInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}) as any;
	}

}

export default VenuesResource;
