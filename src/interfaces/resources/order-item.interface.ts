export interface OrderItemInterface {
	readonly id?: string;
	order_id?: string;
	ticket_type_id?: string;
	ticket_pricing_id?: string;
	quantity: number;
	unit_price_in_cents: number;
	item_type: string;
	description: string;
	redemption_code?: string;

}

export const createOrderItem = (base: any = {}): OrderItemInterface => {
	return {
		...{
			id: "",
			order_id: "",
			ticket_type_id: "",
			ticket_pricing_id: "",
			quantity: 0,
			unit_price_in_cents: 0,
			item_type: "",
			description: "",
			redemption_code: "",
		},
		...base
	} as OrderItemInterface;
};