import { TicketTypeInterface } from "./ticket-type.interface";

export interface RedemptionCodeInterface {
	ticket_type: TicketTypeInterface;
	redemption_code: string;
	discount_in_cents: number;
	hold_type: string;
	max_per_order?: number;
}

export const createRedemptionCode = (
	base: any = {}
): RedemptionCodeInterface => {
	return {
		...{
			ticket_type: {},
			redemption_code: "",
			hold_type: "Discount",
			max_per_order: 0
		},
		...base
	} as RedemptionCodeInterface;
};
