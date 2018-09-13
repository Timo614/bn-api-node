import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "organizations",

    methods: [
        /**
         * Accept an invitation
         * @name accept
         * @param params {security_token}
         * @return
         * @TODO change the url and the method when big-neon/bn-api#277 is merged
         */
        createRequestMethod({
            name: "accept",
            method: "GET",
            path: "/accept_invite",
            required: ["security_token"],
            requiresAuth: false
        }),
        /**
         * Decline an invitation
         * @name decline
         * @param params {security_token}
         * @return
         * @TODO change the url and the method when big-neon/bn-api#277 is merged
         */
        createRequestMethod({
            name: "decline",
            method: "GET",
            path: "/decline_invite",
            required: ["security_token"],
            requiresAuth: false
        }),

        /**
         * View an invitation
         * @name read
         * @param params {security_token}
         * @return Invitation
         * @TODO change the url and the method when big-neon/bn-api#277 is merged
         */
        createRequestMethod({
            name: "read",
            method: "GET",
            path: "",
            required: ["security_token"],
            requiresAuth: false
        }),


    ]
} as ResourceInterface;
