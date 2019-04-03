import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

/**
 * @endpoint status
 * @url /status
 */
class StatusResource extends ResourceClass {
	methodDefinitions = {
		read: this.read()
	};

	constructor() {
		super("status");
		this.buildAliases();
	}

	/**
	 * Check the status of the server
	 * @auth false
	 * @response 200
	 * @url /status
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