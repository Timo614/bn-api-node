import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventArtistInterface } from "../../interfaces/resources/event-artist.interface";

/**
 * @endpoint events.artists
 * @url /events/{event_id}/artists
 */
class EventArtistsResource extends ResourceClass {
	methodDefinitions = {
		create: this.create(),
		update: this.update(),
	};

	constructor() {
		super("events");
		this.buildAliases();
	}

	/**
	 * Add an artist to an event
	 * @auth true
	 * @params {EventArtistInterface}
	 * @required {event_id:uuid}
	 * @url /events/{event_id}/artists
	 */
	create(): EventArtistInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/artists",
			required: ["artist_id", "rank", "set_time", "importance"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update event artist list
	 * Pushes an array of UpdateArtistRequest over the existing data
	 * @auth true
	 * @name artists.update
	 * @params [{EventArtistInterface}]
	 * @required {event_id:uuid}
	 * @url /events/{event_id}/artists
	 */
	update(): Array<EventArtistInterface> {

		return createRequestMethod({
			name: "update",
			method: "PUT",
			path: "/{event_id}/artists",
			required: ["artists"],
			requiresAuth: true
		}) as any;
	}
}
export default EventArtistsResource;