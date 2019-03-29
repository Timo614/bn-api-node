import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { CodeInterface } from "../interfaces/resources/code.interface";

/**
 * @endpoint codes
 * @url /codes
 */
class CodesResource extends ResourceClass {
	constructor() {
		super("codes");
	}

	/**
	 * Update a code
	 * @auth true
	 * @params {...[[CodeInterface]]}
	 * @required {id: uuid}
	 * @url /codes/{id}
	 */
	update(): CodeInterface {
		return createRequestMethod({
			method: "PUT",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Delete a code
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @return {status: 200}
	 * @url /codes/{id}
	 */
	delete(): void {
		return createRequestMethod({
			method: "DELETE",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Read a code
	 * @auth true
	 * @params {id:uuid}
	 * @required {id: uuid}
	 * @url /codes/{id}
	 */
	read(): CodeInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}
}

export default CodesResource;
