import { OrderItemInterface } from "./order-item.interface";

export interface OrderDetailsInterface {
	readonly items: Array<OrderItemInterface>,
	readonly order_contains_tickets_for_other_organizations: boolean
}

export const createOrderDetails = (base: any = {}): OrderDetailsInterface => {
	return {
		...{
			items: [],
			order_contains_tickets_for_other_organizations: false
		},
		...base
	} as OrderDetailsInterface;
};