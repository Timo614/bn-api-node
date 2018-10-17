import { createTicketPricing, TicketPricingInterface } from "./ticket-pricing.interface";

export interface TicketTypeInterface {
    readonly id?: string;
    event_id: string;
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    quantity: number;
    limit: number;//Per person
	increment: number;//How many can be bought at a time (4 per table)
    price_points: Array<TicketPricingInterface>;
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createTicketType = (base: any = {}): TicketTypeInterface => {
	if (base && base.price_points) {
		base.price_points = base.price_points.map((ticketPricing: any) => createTicketPricing(ticketPricing));
	}
	return {
		...{
			id: "",
			event_id: "",
			name: "",
			description: "",
			start_date: "",
			end_date: "",
			quantity: 0,
			limit: 0,//Per person
			increment: 1,//In batches of 1
			price_points: [],
			created_at: "",
			updated_at: "",
		},
		...base
	} as TicketTypeInterface;
};