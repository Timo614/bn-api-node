export interface EventSummaryResultTicketTypeInterface {
	event_id: string;
	name: string;
	min_price: number;
	max_price: number;
	total: number;
	sold_unreserved: number;
	sold_held: number;
	open: number;
	held: number;
	sales_total_in_cents?: number;
}

export const createEventSummaryResultTicketType = (base: any = {}): EventSummaryResultTicketTypeInterface => {

	return {
		...{
			event_id: "",
			name: "",
			min_price: 0,
			max_price: 0,
			total: 0,
			sold_unreserved: 0,
			sold_held: 0,
			open: 0,
			held: 0,
			sales_total_in_cents: 0,
		},
		...base
	} as EventSummaryResultTicketTypeInterface;
};