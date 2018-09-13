import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "organizations",

    methods: [


        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["owner_user_id", "name"],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "edit",
            method: "PATCH",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "find",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: [],
            requiresAuth: true
        }),

        /**
         * List the events that are a part of this organization
         * @name event.index
         * @param params {id}
         * @return Array<ArtistInterface>
         */
        instanceOfRequestMethod({
            namespace: 'event',
            name: "index",
            method: "GET",
            path: "/{id}/events",
            required: ['id'],
            requiresAuth: true

        }),

        /**
         * List the artists that are a part of this organization
         * @name artist.index
         * @param params {id}
         * @return Array<ArtistInterface>
         */
        instanceOfRequestMethod({
            namespace: 'artist',
            name: "index",
            method: "GET",
            path: "/{id}/artists",
            required: ["id"],
            requiresAuth: true
        }),

        /**
         * Add an artist to this organization
         * @name artist.create
         * @param params {ArtistInterface}
         * @return ArtistInterface
         */
        instanceOfRequestMethod({
            namespace: 'artist',
            name: "create",
            method: "POST",
            path: "/{id}/artists",
            required: ["id", "organization_id", "name", "bio"],
            requiresAuth: true
        }),

        /**
         * Invite a user to the organization
         * @name invitation.create
         * @param params {id, user_id | user_email}
         */
        instanceOfRequestMethod({
            namespace: 'invitation',
            name: "create",
            method: "POST",
            path: "/{id}/invite",
            required: ["id"],
            requireOne: ["user_id", "user_email"],
            requiresAuth: true
        }),


    ]
} as ResourceInterface;
