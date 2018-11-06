import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { CodeInterface } from "../interfaces/resources/code.interface";

/**
 * @endpoint codes
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
	 * Read a code
	 * @auth true
	 * @params {id:uuid}
	 * @required {id: uuid}
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