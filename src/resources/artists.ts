import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";
import {ArtistInterface} from "../interfaces/resources/artist.interface";

export default {
    path: "artists",

    methods: [
        /**
         * Get a single artist
         * @param id
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: false
        }),

        /**
         * Edit an artist
         * @param id
         */
        instanceOfRequestMethod({
            name: "edit",
            method: "PUT",
            path: "/{id}",
            required: ["id"],
            requireOne: ["name", "bio"],
            requiresAuth: true
        }),

        /**
         * List artists
         * @TODO Add pagination params
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        /**
         * Find artists
         * @notimplemented
         */
        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),
        /**
         * Create an artist
         * @param name
         * @param bio
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["name", "bio"],
            requiresAuth: true
        }),
    ]
} as ResourceInterface;
