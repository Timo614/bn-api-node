import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { ArtistInterface } from "../../interfaces/resources/artist.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.artists
 */
class OrganizationArtistsResource extends ResourceClass {
	constructor() {
		super("organizations");
	}

	/**
	 * List the artists that are a part of this organization
	 * @auth true
	 * @params {organization_id:uuid}
	 * @requires {organization_id:uuid}
	 * @data Array<[[ArtistInterface]]>
	 */
	index(): IndexInterface {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/artists",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Add an artist to this organization
	 * @params {ArtistInterface}
	 * @requires {organization_id:uuid, name: string, bio: string}
	 */
	create(): ArtistInterface {
		return createRequestMethod({
			namespace: "artists",
			name: "create",
			method: "POST",
			path: "/{organization_id}/artists",
			required: ["name", "bio"],
			requiresAuth: true
		}) as any;
	}


}
export default OrganizationArtistsResource;
