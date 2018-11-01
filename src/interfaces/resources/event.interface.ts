import { createTicketType, TicketTypeInterface } from "./ticket-type.interface";
import { EventArtistInterface } from "./event-artist.interface";
import { EventInterestInterface } from "./event-interest.interface";
import { VenueInterface } from "./venue.interface";
import { OrganizationInterface } from "./organization.interface";

export interface EventInterface {
	readonly id?: string;
	name: string;
	organization_id: string;
	venue_id: string;
	event_start: Date;
	door_time: Date;
	status?: string;
	publish_date: Date;
	promo_image_url?: string;
	additional_info?: string;
	age_limit?: number;
	organization?: OrganizationInterface;
	venue?: VenueInterface;
	artists?: Array<EventArtistInterface>;
	ticket_types: Array<TicketTypeInterface>;
	total_interest: number;
	user_is_interested: boolean;
	top_line_info?: string;
	fee_in_cents?: number;
	min_ticket_price?: number;
	max_ticket_price?: number;
	readonly created_at: string;
	readonly updated_at: string;
}

export const createEvent = (base: any = {}): EventInterface => {
	if (base && base.ticket_types) {
		base.ticket_types = base.ticket_types.map((ticketType: any) => createTicketType(ticketType));
	}
	return {
		...{
			id: "",
			name: "",
			organization_id: "",
			venue_id: "",
			event_start: "",
			door_time: "",
			status: "",
			publish_date: "",
			promo_image_url: "",
			additional_info: "",
			age_limit: 0,
			organization: {},
			venue: {},
			artists: [],
			ticket_types: [],
			total_interest: 0,
			user_is_interested: false,
			top_line_info: "",
			fee_in_cents: 0,
			min_ticket_price: 0,
			max_ticket_price: 0,
			created_at: "",
			updated_at: ""
		},
		...base
	} as EventInterface;
};