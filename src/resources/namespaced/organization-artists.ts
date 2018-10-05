import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { ArtistInterface } from "../../interfaces/resources/artist.interface";

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
	 */
	index(): Array<ArtistInterface> {
		return createRequestMethod({
			name: "index",
			method: "GET",
			path: "/{organization_id}/artists",
			required: ["organization_id"],
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
			required: ["organization_id", "name", "bio"],
			requiresAuth: true
		}) as any;
	}


}
export default OrganizationArtistsResource;
