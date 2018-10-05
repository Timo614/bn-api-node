import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint status
 */
class StatusResource extends ResourceClass {
	constructor() {
		super("status");
	}

	/**
	 * Check the status of the server
	 * @auth false
	 * @response 200
	 */
	read(): void {
		return createRequestMethod({
			name: "status",
			method: "GET",
			path: "",
			requiresAuth: false
		}) as any;
	}
}
export default StatusResource;