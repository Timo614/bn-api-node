import {
	createTicketPricing,
	TicketPricingInterface
} from "./ticket-pricing.interface";
import { SoldOutBehavior, Visibility } from "../enums/ticket-types.enum";

export interface TicketTypeInterface {
	readonly id?: string;
	event_id: string;
	name: string;
	description?: string;
	start_date: Date;
	end_date: Date;
	quantity: number;
	limit_per_person: number; //Per person
	increment: number; //How many can be bought at a time (4 per table)
	price_in_cents: number;
	ticket_pricing: Array<TicketPricingInterface>;
	sold_out_behavior: SoldOutBehavior;
	is_private: boolean;
	readonly created_at?: Date;
	readonly updated_at?: Date;
	readonly cancelled_at?: Date;
}

export const createTicketType = (base: any = {}): TicketTypeInterface => {
	if (base && base.ticket_pricing) {
		base.ticket_pricing = base.ticket_pricing.map((ticketPricing: any) =>
			createTicketPricing(ticketPricing)
		);
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
			limit_per_person: 0, //Per person
			increment: 1, //In batches of 1
			price_in_cents: 0,
			ticket_pricing: [],
			sold_out_behavior: SoldOutBehavior.SHOW_SOLD_OUT,
			is_private: false,
			visibility: Visibility.ALWAYS,
			created_at: "",
			updated_at: "",
			cancelled_at: null
		},
		...base
	} as TicketTypeInterface;
};
