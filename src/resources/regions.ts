import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";
import ResourceClass from "../classes/abstracts/resource.class";
import { RegionInterface } from "../interfaces/resources/region.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint regions
 */

class RegionsResource extends ResourceClass {
	constructor() {
		super("regions");
	}

	/**
	 * Get a single region
	 * @auth false
	 * @params {id}
	 * @required {id}
	 */
	read(): RegionInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update a single region
	 * @auth true
	 * @params {id, ...RegionInterface}
	 */
	update(): RegionInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;

	}

	/**
	 * Create an region
	 * @auth true
	 * @params {...RegionInterface}
	 */
	create(): RegionInterface {
		return createRequestMethod({
			method: "POST",
			path: "",
			required: ["name"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List regions
	 * @auth false
	 * @data Array<[[RegionInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "",
			required: [],
			requiresAuth: false
		}) as any;
	}

}
export default RegionsResource;