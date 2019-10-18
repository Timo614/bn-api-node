import { createRequestMethod } from "../interfaces/server/request-method.interface";
import ResourceClass from "../classes/abstracts/resource.class";

import { IndexInterface } from "../interfaces/resources/structures/index.interface";
/**
 * @endpoint slugs
 * @url /slugs
 */
class SlugsResource extends ResourceClass {
	methodDefinitions = {
		read: this.read(),
	};

	constructor() {
		super("slugs");
		this.buildAliases();

		this.namespaces = {
		};
	}

	/**
	 * Read events related to this slug
	 * @required {id:uuid}
	 * @params {...[[PagingInterface]]}
	 * @data Array<[[EventInterface]]>
	 * @url /slugs
	 */
	read(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{id}",
			requiresAuth: false
		}) as any;
	}

}

export default SlugsResource;