export interface TicketPricingInterface {
    readonly id?: string;
    ticket_type_id?: string;
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    price_in_cents: number;
    readonly associated_with_active_orders?: boolean;
    readonly created_at?:Date;
    readonly updated_at?:Date;

}

export const createTicketPricing = (base: any = {}): TicketPricingInterface => {
	return {
		...{
			id: "",
			ticket_type_id: "",
			name: "",
			description: "",
			start_date: "",
			end_date: "",
			price_in_cents: 0,
      associated_with_active_orders: false,
			created_at: "",
			updated_at: "",
		},
		...base
	} as TicketPricingInterface;
};
