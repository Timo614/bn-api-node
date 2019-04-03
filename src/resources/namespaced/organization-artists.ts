import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { ArtistInterface } from "../../interfaces/resources/artist.interface";
import { IndexInterface } from "../../interfaces/resources/structures/index.interface";

/**
 * @endpoint organizations.artists
 * @url /organizations/{organization_id}/artists
 */
class OrganizationArtistsResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create(),
	};

	constructor() {
		super("organizations");
		this.buildAliases();
	}

	/**
	 * List the artists that are a part of this organization
	 * @auth true
	 * @params {organization_id:uuid}
	 * @required {organization_id:uuid}
	 * @data Array<[[ArtistInterface]]>
	 * @url /organizations/{organization_id}/artists
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
	 * @required {organization_id:uuid, name: string, bio: string}
	 * @url /organizations/{organization_id}/artists
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
