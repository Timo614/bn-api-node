import { OrderItemInterface } from "./order-item.interface";

export interface OrderInterface {
    readonly id?: string;
    user_id: string;
    date: Date,
    items: Array<OrderItemInterface>;
    readonly status?: string;
    readonly order_type?: string;
    readonly expires_at?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
	total_in_cents: number;
	seconds_until_expiry: number;
	note?: string
}

export const createOrder = (base: any = {}): OrderInterface => {
	return {
		...{
			id: "",
			user_id: "",
			items: [],
			status: "",
			date: "",
			order_type: "",
			expires_at: "",
			created_at: "",
			updated_at: "",
			total_in_cents: 0,
			seconds_until_expiry: 0,
			note: ""
		},
		...base
	} as OrderInterface;
};