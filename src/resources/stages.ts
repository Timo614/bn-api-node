import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { StagesInterface } from "../interfaces/resources/stages.interface";

/**
 * @endpoint stages
 * @url /stages
 */
class StagesResource extends ResourceClass {
	methodDefinitions = {
		read: this.read(),
		update: this.update(),
		del: this.del(),
	};

	constructor() {
		super("stages");
		this.buildAliases();
	}

	/**
	 * Read a stage
	 * @required {id:uuid}
	 * @auth false
	 * @url /stages/{id}
	 */
	read(): StagesInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update a stage
	 * @required {id:uuid}
	 * @params {id: uuid, name:string, description: string, capacity: number}
	 * @auth true
	 * @url /stages/{id}
	 */
	update(): StagesInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			requireOne: ["name", "description", "capacity"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a stage
	 * @required {id:uuid}
	 * @auth true
	 * @returns {status: 200}
	 * @url /stages/{id}
	 */
	del(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			requiresAuth: true
		}) as any;
	}
}

export default StagesResource;