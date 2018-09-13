import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";
import {ArtistInterface} from "../interfaces/resources/artist.interface";

export default {
    path: "artists",

    methods: [
        /**
         * Get a single artist
         * @name read
         * @param params {id}
         */
        createRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: false
        }),

        /**
         * Edit an artist
         * @name update
         * @param params {id}
         */
        createRequestMethod({
            name: "update",
            method: "PUT",
            path: "/{id}",
            required: ["id"],
            requireOne: ["name", "bio"],
            requiresAuth: true
        }),

        /**
         * List artists
         * @name index
         * @param params {paginationParams}
         * @return Array<ArtistInterface>
         * @TODO Add pagination params
         */
        createRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        /**
         * Find artists
         * @name find
         * @params {}
         * @notimplemented
         */
        createRequestMethod({
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
        createRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["name", "bio"],
            requiresAuth: true
        }),
    ]
} as ResourceInterface;
