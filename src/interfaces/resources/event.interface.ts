import { createTicketType, TicketTypeInterface } from "./ticket-type.interface";
import { EventArtistInterface } from "./event-artist.interface";
import { EventInterestInterface } from "./event-interest.interface";
import { VenueInterface } from "./venue.interface";
import { OrganizationInterface } from "./organization.interface";

export interface EventInterface {
	id?: string;
	name: string;
	organization_id: string;
	venue_id: string;
	created_at: string;
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
			created_at: "",
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
			top_line_info: ""
		},
		...base
	} as EventInterface;
};