import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { RegionInterface } from "../interfaces/resources/region.interface";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint regions
 * @url /regions
 */

class RegionsResource extends ResourceClass {
	methodDefinitions = {
		read: this.read(),
		update: this.update(),
		create: this.create(),
		index: this.index(),
	};

	constructor() {
		super("regions");
		this.buildAliases();
	}

	/**
	 * Get a single region
	 * @auth false
	 * @params {id}
	 * @required {id}
	 * @url /regions/{id}
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
	 * @url /regions/{id}
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
	 * @url /regions
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
	 * @url /regions
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