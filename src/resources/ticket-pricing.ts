import {createRequestMethod} from "../interfaces/server/request-method.interface";
import {ResourceInterface} from "../interfaces/server/resource";

export default {
    path: "ticket-pricing",

    methods: [

        /**
         * Create an region
         * @name create
         * @param {TicketPricingInterface}
         * @return TicketPricingInterface
         */
        createRequestMethod({
            name: "create",
            method: "POST",
            path: "",
            required: ["ticket_type_id", "name", "price"],
            requiresAuth: true
        }),

    ]
} as ResourceInterface;
