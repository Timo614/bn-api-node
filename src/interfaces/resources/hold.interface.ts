import { CartItemInterface } from "./cart-item.interface";

export interface HoldInterface {
	readonly id?: string;
	name: string;
	parent_hold_id: string;
	event_id?: string;
	redemption_code: string;
	discount_in_cents: number;
	email: string;
	phone: string;
	available: number;
	ticket_type_id: string;
    hold_type: string;
	quantity: number;
	end_at?: Date;
	max_per_order?: number;
}

export const createHold = (base: any = {}): HoldInterface => {
	return {
		...{
			id: "",
			event_id: "",
			parent_hold_id: "",
			name: "",
			email: "",
			phone: "",
			available: 0,
			ticket_type_id: "",
			quantity: 0,
			redemption_code: "",
			hold_type: "Discount",
			discount_in_cents: 0,
			end_at: "",
			max_per_order: 0,
		},
		...base
	} as HoldInterface
};