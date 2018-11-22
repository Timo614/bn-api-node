import { createTicketType, TicketTypeInterface } from "./ticket-type.interface";
import { createVenue, VenueInterface } from "./venue.interface";
import {
	createEventSummaryResultTicketType,
	EventSummaryResultTicketTypeInterface
} from "./event-dashboard-ticket-type.interface";


export interface EventDashboardInterface {
	readonly id?: string;
	name: string;
	organization_id: string;
	venue?: VenueInterface;
	event_start?: Date;
	door_time?: Date;
	status: string;
	promo_image_url?: string;
	additional_info?: string;
	top_line_info?: string;
	age_limit?: number;
	cancelled_at?: Date;
	min_ticket_price?: number;
	max_ticket_price?: number;
	publish_date?: Date;
	on_sale?: Date;
	total_tickets: number;
	sold_unreserved: number;
	sold_held: number;
	tickets_open: number;
	tickets_held: number;
	sales_total_in_cents: number;
	ticket_types: Array<EventSummaryResultTicketTypeInterface>;
	readonly created_at: Date;
}

export const createEvent = (base: any = {}): EventDashboardInterface => {
	if (base && base.ticket_types) {
		base.ticket_types = base.ticket_types.map((ticketType: any) => createEventSummaryResultTicketType(ticketType));
	}
	if (base.venue) {
		base.venue = createVenue(base.venue);
	}
	return {
		...{
			id: "",
			name: "",
			organization_id: "",
			venue: {},
			event_start: "",
			door_time: "",
			status: "",
			promo_image_url: "",
			additional_info: "",
			top_line_info: "",
			age_limit: 0,
			cancelled_at: "",
			min_ticket_price: 0,
			max_ticket_price: 0,
			publish_date: "",
			on_sale: "",
			total_tickets: 0,
			sold_unreserved: 0,
			sold_held: 0,
			tickets_open: 0,
			tickets_held: 0,
			sales_total_in_cents: 0,
			ticket_types: [],
			created_at: "",
		},
		...base
	} as EventDashboardInterface;
};