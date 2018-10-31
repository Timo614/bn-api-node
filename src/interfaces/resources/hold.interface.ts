import { CartItemInterface } from "./cart-item.interface";

export interface HoldInterface {
	readonly id?: string;
	event_id?: string;
	name: string;
	redemption_code: string;
	discount_in_cents: number;
	ticket_type_id: string;
    hold_type: string;
	quantity: number;
	end_at?: Date;
	max_per_order?: number;
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createHold = (base: any = {}): HoldInterface => {
	return {
		...{
			id: "",
			event_id: "",
			name: "",
			ticket_type_id: "",
			quantity: 0,
			redemption_code: "",
			hold_type: "Discount",
			discount_in_cents: 0,
			end_at: "",
			max_per_order: 0,
			created_at: "",
			updated_at: ""
		},
		...base
	} as HoldInterface
};