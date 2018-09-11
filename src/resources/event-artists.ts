import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "events/{event_id}/artists",

    methods: [

        /**
         * Add an artist to an event
         * @name create
         * @param params {EventArtistInterface}
         * @return EventArtistInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["event_id", "artist_id", "rank", "set_time"],
            requiresAuth: true
        }),

        /**
         * Edit event artist
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),

        /**
         * Delete an artist from an event
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "delete",
            method: "DELETE",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: true
        }),

        /**
         * List artists for an event
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: ["event_id"],
            requiresAuth: false
        }),

        /**
         * Read an artist for an event
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ["event_id", "id"],
            requiresAuth: false
        })
    ]
} as ResourceInterface;
