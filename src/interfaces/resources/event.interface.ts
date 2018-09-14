import { createTicket, TicketInterface } from "./ticket.interface";
import { EventArtistInterface } from "./event-artist.interface";
import { EventInterestInterface } from "./event-interest.interface";

export interface EventInterface {
    id?: string;
    name: string;
    organization_id: string;
    venue_id: string;
    event_start: Date;
    event_end: Date;
    door_time: Date;
    publish_date: Date;
    is_external: boolean;
    promo_image_url?: string;
    additional_info?: string;
    age_limit?: number;
    external_url?: string;
    status?: string;
    ticket_sell_date?: Date;
    cancelled_at?: Date;
    created_at?: Date;
    updated_at?:Date;

    tickets: Array<TicketInterface>;
    artists?: Array<EventArtistInterface>;
    interests?: Array<EventInterestInterface>;

    blockchain_id?: string;
    blockchain_expiry_date: number;//Unix timestamp or block height
}

export const createEvent = (base: any = {}): EventInterface => {
	if (base && base.tickets) {
		base.tickets = base.tickets.map((ticket: any) => createTicket(ticket));
	}
	return {
		...{
			id: "",
			name: "",
			organization_id: "",
			venue_id: "",
			created_at: "",
			ticket_sell_date: "",
			event_start: "",
			is_external: false,
			external_url: "",
			promo_image_url: "",
			additional_info: "",
			age_limit: 0,
			door_time: "",
			publish_date: "",
			tickets: [],
			artists: [],
			interests: [],
			cancelled_at: "",
			blockchain_id: "",
			blockchain_expiry_date: 0,
		},
		...base
	} as EventInterface;
};