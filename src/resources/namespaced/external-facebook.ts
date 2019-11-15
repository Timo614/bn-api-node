import { IndexInterface } from "../../interfaces/resources/structures/index.interface";
import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { FacebookEventInterface } from "../../interfaces/resources/facebook-event.interface";

class ExternalFacebookResource extends ResourceClass {
	methodDefinitions = {
		pages: this.pages(),
		createEvent: this.createEvent(),
		del: this.del()
	};

	constructor() {
		super("external");
		this.buildAliases();
	}

	/**
	 * Gets a list of pages that a user has access to
	 * manage on Facebook. The user must have granted
	 * BigNeon OAuth access with the `manage_pages` scope
	 * @auth true
	 * @data Array<[[FacebookPageInterface]]>
	 * @url /external/facebook/pages
	 */
	pages(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/facebook/pages",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Creates a facebook event from a Bigneon event
	 * @auth true
	 * @data [[FacebookEventInterface]]
	 * @url /external/facebook/events
	 */
	createEvent(): FacebookEventInterface {
		return createRequestMethod({
			method: "POST",
			path: "/facebook/events",
			required: ["event_id", "page_id", "category"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Unlinks the current user's Facebook account
	 * @auth  true
	 * @url /external/facebook
	 */
	del(): any {
		return createRequestMethod({
			method: "DELETE",
			path: "/facebook",
			requiresAuth: true
		});
	}
}

export default ExternalFacebookResource;
