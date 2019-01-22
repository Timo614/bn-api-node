export interface RefundItemInterface {
	order_item_id: string,
	ticket_instance_id?: string,
}


export const createRefundItem = (base: any = {}): RefundItemInterface => {
	return {
		...{
			order_item_id: "",
			ticket_instance_id: null
		},
		...base
	} as RefundItemInterface;
};