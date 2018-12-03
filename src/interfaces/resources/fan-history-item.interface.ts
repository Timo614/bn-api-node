export interface FanHistoryItemInterface {
	type: string,
	revenue_in_cents: number,
	event_name: string,
	ticket_sales: number,
	order_id: string,
	order_date: Date,
}

export const createFanHistoryItem = (base: any = {}): FanHistoryItemInterface => {
	return {
		...{
			type: "",
			revenue_in_cents: 0,
			event_name: "",
			ticket_sales: 0,
			order_id: "",
			order_date: "",
		},
		...base
	} as FanHistoryItemInterface;
};