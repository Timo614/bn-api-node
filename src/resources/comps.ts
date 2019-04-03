import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { CodeInterface } from "../interfaces/resources/code.interface";
import { HoldInterface } from "../interfaces/resources/hold.interface";

/**
 * @endpoint comps
 * @url /comps
 */
class CompsResource extends ResourceClass {
	methodDefinitions = {
		update: this.update(),
		del: this.del(),
		read: this.read(),
	};

	constructor() {
		super("comps");
		this.buildAliases();
	}

	/**
	 * Update a comp
	 * @auth true
	 * @params {...[[HoldInterface]]}
	 * @required {id: uuid}
	 * @url /comps/{id}
	 */
	update(): HoldInterface {
		return createRequestMethod({
			method: "PATCH",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a comp
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @return {status: 200}
	 * @url /comps/{id}
	 */
	del(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read a comp
	 * @auth true
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @url /comps/{id}
	 */
	read(): HoldInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

}

export default CompsResource;