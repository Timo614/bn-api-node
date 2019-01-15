import { createTicketType, TicketTypeInterface } from "./ticket-type.interface";
import { EventArtistInterface } from "./event-artist.interface";
import { VenueInterface } from "./venue.interface";
import { OrganizationInterface } from "./organization.interface";
import { OverrideStatus } from "../enums/events.enum";




export interface EventInterface {
	readonly id?: string;
	name: string;
	organization_id: string;
	venue_id: string;
	event_start: Date;
	door_time: Date;
	event_end?: Date;
	cancelled_at?: Date;
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
	video_url?: string;
	is_external: boolean;
	external_url?: string;
	override_status?: OverrideStatus;
	limited_tickets_remaining?: number;
	readonly tracking_keys: {google_ga_key?: string, facebook_pixel_key?: string},
	readonly localized_times: EventLocalizedTimeInterface,
	readonly created_at: string;
	readonly updated_at: string;
}

export const createEvent = (base: any = {}): EventInterface => {
	if (base && base.ticket_types) {
		base.ticket_types = base.ticket_types.map((ticketType: any) => createTicketType(ticketType));
	}
	if (base && base.localized_times) {
		base.localized_times = createEventLocalizedTimeInterface(base.localized_times);
	}
	return {
		...{
			id: "",
			name: "",
			organization_id: "",
			venue_id: "",
			event_start: "",
			door_time: "",
			event_end: "",
			cancelled_at: null,
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
			video_url: "",
			is_external: false,
			external_url: "",
			override_status: undefined,
			limited_tickets_remaining: null,
			tracking_keys: {},
			localized_times: createEventLocalizedTimeInterface(),
			created_at: "",
			updated_at: ""
		},
		...base
	} as EventInterface;
};

/**
 * RFC2822 formatted strings
 */
export interface EventLocalizedTimeInterface {
	readonly event_start?: Date;
	readonly event_end?: Date;
	readonly door_time?: Date;
}

export const createEventLocalizedTimeInterface = (base: any = {}): EventLocalizedTimeInterface => {
	return {
		...{
			event_start: null,
			event_end: null,
			door_time: null,
		},
		...base
	} as EventLocalizedTimeInterface;
};