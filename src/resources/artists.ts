import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ArtistInterface } from "../interfaces/resources/artist.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint artists
 */
class ArtistsResource extends ResourceClass {
	constructor() {
		super("artists");
	}

	/**
	 * Get a single artist
	 * @auth false
	 * @params {id:uuid}
	 */
	read(): ArtistInterface {
		return createRequestMethod({
			name: "read",
			method: "GET",
			path: "/{id}",
			required: ["id"],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update an artist
	 * @auth true
	 * @params {id, ...ArtistInterface}
	 */
	update(): ArtistInterface {
		return createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{id}",
			required: ["id"],
			requireOne: ["name", "bio"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * List of artists
	 * @auth false
	 * @params {skip?:integer, limit?:integer}
	 * @data Array<[[ArtistInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create an artist
	 * @auth true
	 * @params {...ArtistsInterface}
	 * @requires {name: string, bio: string}
	 */
	create(): ArtistInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "",
			required: ["name", "bio"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Toggle the privacy flag of an artists
	 * @auth true
	 * @params {id:uuid}
	 * @requires {id:uuid}
	 */
	togglePrivacy(): ArtistInterface {
		return createRequestMethod({
			name: "togglePrivacy",
			method: "PUT",
			path: "/{id}/toggle_privacy",
			required: ["id"],
			requiresAuth: true
		}) as any;
	}


}

export default ArtistsResource;
