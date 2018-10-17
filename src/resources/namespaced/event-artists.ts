import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import ResourceClass from "../../classes/abstracts/resource.class";
import { EventArtistInterface } from "../../interfaces/resources/event-artist.interface";

/**
 * @endpoint events.artists
 */
class EventArtistsResource extends ResourceClass {
	constructor() {
		super("events");
	}

	/**
	 * Add an artist to an event
	 * @auth true
	 * @params {EventArtistInterface}
	 * @requires {event_id:uuid}
	 */
	create(): EventArtistInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{event_id}/artists",
			required: ["artist_id", "rank", "set_time"],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Update event artist list
	 * Pushes an array of UpdateArtistRequest over the existing data
	 * @auth true
	 * @name artists.update
	 * @params [{EventArtistInterface}]
	 * @requires {event_id:uuid}
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