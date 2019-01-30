import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { ArtistInterface } from "../interfaces/resources/artist.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint artists
 * @url /artists
 */
class ArtistsResource extends ResourceClass {
	constructor() {
		super("artists");
	}

	/**
	 * Get a single artist
	 * @auth false
	 * @params {id:uuid}
	 * @url /artists/{id}
	 */
	read(): ArtistInterface {
		return createRequestMethod({
			name: "read",
			method: "GET",
			path: "/{id}",
			required: [],
			requiresAuth: false
		}) as any;
	}

	/**
	 * Update an artist
	 * @auth true
	 * @params {id, ...ArtistInterface}
	 * @url /artists/{id}
	 */
	update(): ArtistInterface {
		return createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{id}",
			required: [],
			requireOne: ["name", "bio"],
			requiresAuth: true
		}) as any;
	}


	/**
	 * List of artists
	 * @auth true
	 * @params {q: string, spotify: number[0/1] (default: 1)}
	 * @data Array<[[ArtistInterface]]>
	 * @url /artists/search?
	 */
	search(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/search?q={q}&spotify={spotify|1}",
			required: [],
			requiresAuth: true,
			minTimeout: 10000,
		}) as any;
	}

	/**
	 * List of artists
	 * @auth false
	 * @params {skip?:integer, limit?:integer}
	 * @data Array<[[ArtistInterface]]>
	 * @url /artists
	 */
	index(): IndexInterface {
		return createRequestMethod({
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
	 * @requireOne {name: string, bio: string, spotify_id: string}
	 * @url /artists
	 */
	create(): ArtistInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "",
			requireOne: ["name", "bio", "spotify_id"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Toggle the privacy flag of an artists
	 * @auth true
	 * @params {id:uuid}
	 * @required {id:uuid}
	 * @url /artists/{id}/toggle_privacy
	 */
	togglePrivacy(): ArtistInterface {
		return createRequestMethod({
			name: "togglePrivacy",
			method: "PUT",
			path: "/{id}/toggle_privacy",
			required: [],
			requiresAuth: true
		}) as any;
	}


}

export default ArtistsResource;
