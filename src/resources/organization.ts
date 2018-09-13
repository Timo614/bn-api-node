import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "organizations",

    methods: [

        /**
         * Get a single organization
         * @name read
         * @param params {id}
         * @return OrganizationInterface
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Update a single organization
         * @name read
         * @param params {id, ...OrganizationInterface}
         * @return OrganizationInterface
         */
        instanceOfRequestMethod({
            name: "update",
            method: "PATCH",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Create an organization
         * @name create
         * @param {OrganizationInterface}
         * @return OrganizationInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["owner_user_id", "name"],
            requiresAuth: true
        }),

        /**
         * List organizations
         * @name index
         * @return Array<OrganizationInterface>
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

        /**
         * Find organizations
         * @name index
         * @return Array<OrganizationInterface>
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
         * List the artists that are a part of this organization
         * @name artist.index
         * @param params {id}
         * @return Array<ArtistInterface>
         */
        instanceOfRequestMethod({
            namespace: 'artists',
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
            namespace: 'artists',
            name: "create",
            method: "POST",
            path: "/{id}/artists",
            required: ["id", "organization_id", "name", "bio"],
            requiresAuth: true
        }),

        /**
         * List the events that are a part of this organization
         * @name event.index
         * @param params {id}
         * @return Array<ArtistInterface>
         */
        instanceOfRequestMethod({
            namespace: 'events',
            name: "index",
            method: "GET",
            path: "/{id}/events",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * List the events that are a part of this organization
         * @name fee_schedule.index
         * @param params {id}
         * @return Array<FeeSchedule>
         */
        instanceOfRequestMethod({
            namespace: 'fee_schedule',
            name: "index",
            method: "GET",
            path: "/{id}/fee_schedule",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Invite a user to the organization
         * @name invite.create
         * @param params {id, user_id | user_email}
         */
        instanceOfRequestMethod({
            namespace: 'invite',
            name: "create",
            method: "POST",
            path: "/{id}/invite",
            required: ["id"],
            requireOne: ["user_id", "user_email"],
            requiresAuth: true
        }),

        /**
         * Invite a user to the organization
         * @name owner.update
         * @param params {id, owner_user_id}
         */
        instanceOfRequestMethod({
            namespace: 'owner',
            name: "update",
            method: "PUT",
            path: "/{id}/owner",
            required: ["id", "owner_user_id"],
            requiresAuth: true
        }),

        /**
         * Add a user to the organization
         * @name users.create
         * @param params {id, user_id }
         */
        instanceOfRequestMethod({
            namespace: 'users',
            name: "create",
            method: "POST",
            path: "/{id}/users",
            required: ["id", "user_id"],
            requiresAuth: true
        }),

        /**
         * Delete a user from the organization
         * @name users.delete
         * @param params {id, user_id}
         */
        instanceOfRequestMethod({
            namespace: 'users',
            name: "delete",
            method: "DELETE",
            path: "/{id}/users",
            required: ["id", "user_id"],
            requiresAuth: true
        }),

        /**
         * List users in the organization
         * @name users.index
         * @param params {id}
         */
        instanceOfRequestMethod({
            namespace: 'users',
            name: "index",
            method: "GET",
            path: "/{id}/users",
            required: ["id"],
            requiresAuth: true
        }),

        /**
         * List venues in the organization
         * @name venues.index
         * @param params {id}
         */
        instanceOfRequestMethod({
            namespace: 'venues',
            name: "index",
            method: "GET",
            path: "/{id}/venues",
            required: ["id"],
            requiresAuth: true
        }),

        /**
         * Add venue to the organization
         * @name venues.create
         * @param params {id, ...VenueInterface}
         */
        instanceOfRequestMethod({
            namespace: 'venues',
            name: "create",
            method: "POST",
            path: "/{id}/venues",
            required: ["id", "name"],
            requiresAuth: true
        }),


    ]
} as ResourceInterface;
