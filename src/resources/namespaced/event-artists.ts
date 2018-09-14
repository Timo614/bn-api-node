import { createRequestMethod } from "../../interfaces/server/request-method.interface";
import { ResourceInterface } from "../../interfaces/server/resource";

export default {

	methods: [

		/**
         * Add an artist to an event
         * @name artists.create
         * @param params {EventArtistInterface}
         * @return EventArtistInterface
         */
		createRequestMethod({
			namespace: "artists",
			name: "create",
			method: "POST",
			path: "/{id}/artists",
			required: ["id", "artist_id", "rank", "set_time"],
			requiresAuth: true
		}),

		/**
         * Update event artist list
         * Pushes an array of UpdateArtistRequest over the existing data
         * @name artists.update
         */
		createRequestMethod({
			namespace: "artists",
			name: "update",
			method: "PUT",
			path: "/{id}/artists",
			required: ["id"],
			requiresAuth: true
		}),

		// /**
		//  * Delete an artist from an event
		//  * @notimplemented
		//  */
		// instanceOfRequestMethod({
		//     name: "delete",
		//     method: "DELETE",
		//     path: "/{id}",
		//     required: ["event_id", "id"],
		//     requiresAuth: true
		// }),
		//
		// /**
		//  * List artists for an event
		//  * @notimplemented
		//  */
		// instanceOfRequestMethod({
		//     name: "index",
		//     method: "GET",
		//     path: "",
		//     required: ["event_id"],
		//     requiresAuth: false
		// }),
		//
		// /**
		//  * Read an artist for an event
		//  * @notimplemented
		//  */
		// instanceOfRequestMethod({
		//     name: "read",
		//     method: "GET",
		//     path: "/{id}",
		//     required: ["event_id", "id"],
		//     requiresAuth: false
		// })
	]
} as ResourceInterface;
