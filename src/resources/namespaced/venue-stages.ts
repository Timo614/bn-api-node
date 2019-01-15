import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint venues.stages
 */
class VenueStagesResource extends ResourceClass {
	constructor() {
		super("venues");
	}

	/**
	 * List stages in the venue
	 * @params {venue_id:uuid}
	 * @required {venue_id:uuid}
	 * @data  Array<[[StagesInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{venue_id}/stages",
			requiresAuth: false
		}) as any;
	}

	/**
	 * Create a stage for a venue
	 * @params {venue_id:uuid, name:string, capacity?: number, description?: string}
	 * @required {venue_id:uuid, name: string}
	 * @data  Array<[[StagesInterface]]>
	 */
	create(): IndexInterface {
		return createRequestMethod({
			method: "POST",
			path: "/{venue_id}/stages",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}

}

export default VenueStagesResource;