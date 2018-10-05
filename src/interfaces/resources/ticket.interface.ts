export interface TicketInterface {
	readonly id?: string;
	asset_id: string;
	token_id: number;
	ticket_holding_id?: string;
	order_item_id?: string;
	reserved_until?: Date;
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createTicket = (base: any = {}): TicketInterface => {
	return {
		...{
			id: "",
			asset_id: "",
			token_id: 0,
			ticket_holding_id: "",
			order_item_id: "",
			reserved_until: "",
			created_at: "",
			updated_at: "",
		},
		...base
	} as TicketInterface;
};