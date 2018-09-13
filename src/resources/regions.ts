import {instanceOfRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "regions",

    methods: [
        /**
         * Get a single region
         * @name read
         * @param params {id}
         * @return RegionInterface
         */
        instanceOfRequestMethod({
            name: "read",
            method: "GET",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Update a single region
         * @name update
         * @param params {id, ...RegionInterface}
         * @return RegionInterface
         */
        instanceOfRequestMethod({
            name: "update",
            method: "PUT",
            path: "/{id}",
            required: ['id'],
            requiresAuth: true
        }),

        /**
         * Create an region
         * @name create
         * @param {RegionInterface}
         * @return RegionInterface
         */
        instanceOfRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["name"],
            requiresAuth: true
        }),

        /**
         * List regions
         * @name index
         * @return Array<RegionInterface>
         */
        instanceOfRequestMethod({
            name: "index",
            method: "GET",
            path: "",
            required: [],
            requiresAuth: true
        }),

    ]
} as ResourceInterface;
