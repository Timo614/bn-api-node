import {createRequestMethod} from "../../interfaces/server/request-method.interface";
import {ResourceInterface} from "../../interfaces/server/resource";

export default {

    methods: [
        /**
         * Create a ticket type
         * @name feeSchedule.create
         * @param params {TicketInterface}
         * @return TicketInterface
         */
        createRequestMethod({
            namespace: 'feeSchedule',
            name: "create",
            method: "POST",
            path: "/{id}/fee_schedule",
            required: ["id", "name", "ranges"],
            requiresAuth: true
        }),

        /**
         * Get a list of fee schedules for the event
         * @name feeSchedule.index
         * @param params {org_id}
         * @return Array<FeeScheduleInterface>
         */
        createRequestMethod({
            namespace: 'feeSchedule',
            name: "index",
            method: "GET",
            path: "/{id}/fee_schedule",
            required: ["id"],
            requiresAuth: false
        }),

    ]
} as ResourceInterface;
