import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "external",

    methods: [
        /**
         * Login with facebook
         * @name facebookLogin
         * @param params {facebookResponse}
         * @return AuthResponse
         */
        createRequestMethod({
            name: "facebookLogin",
            method: "POST",
            path: "/facebook/web_login",
            required: ["accessToken","userID", "expiresIn", "signedRequest", "reauthorize_required_in"],
            requiresAuth: true
        }),

    ]
} as ResourceInterface;
