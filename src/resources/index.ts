import Artist from "./artists";
import Auth from "./auth";
import Cart from "./cart";
import Event from "./events";
import External from "./external";
import Invitations from "./invitations";
import Organization from "./organization";
import Regions from "./regions";
import Status from "./status";
import Users from "./users";
import Venue from "./venues";
import Orders from "./orders";
import Tickets from "./tickets";
import { ResourceInterface } from "../interfaces/server/resource";
import ResourceClass from "../classes/abstracts/resource.class";
import PasswordReset from "./password-reset";

/**
 * List of available endpoints
 * @endpoint artists [[ArtistsResource]]
 * @endpoint auth [[AuthResource]]
 * @endpoint cart [[CartResource]]
 * @endpoint events [[EventsResource]]
 * @endpoint events.artists [[EventArtistsResource]]
 * @endpoint events.interests [[EventInterestsResource]]
 * @endpoint events.ticketTypes [[EventTicketTypesResource]]
 * @endpoint events.tickets [[EventTicketsResource]]
 * @endpoint external [[ExternalResource]]
 * @endpoint invitations [[InvitationsResource]]
 * @endpoint orders [[OrdersResource]]
 * @endpoint organizations [[OrganizationsResource]]
 * @endpoint organizations.artists [[OrganizationArtistsResource]]
 * @endpoint organizations.events [[OrganizationEventsResource]]
 * @endpoint organizations.feeSchedules [[OrganizationFeeSchedulesResource]]
 * @endpoint organizations.invite [[OrganizationInvitationsResource]]
 * @endpoint organizations.owner [[OrganizationOwnersResource]]
 * @endpoint organizations.users [[OrganizationUsersResource]]
 * @endpoint organizations.venues [[OrganizationVenueResource]]
 * @endpoint passwordReset [[PasswordResetResource]]
 * @endpoint regions [[RegionsResource]]
 * @endpoint status [[StatusResource]]
 * @endpoint tickets [[TicketsResource]]
 * @endpoint users [[UsersResource]]
 * @endpoint venues [[VenuesResource]]
 * @endpoint venues.events [[VenueEventsResource]]
 */
export const endpoints: { [endpoint: string]: ResourceInterface | ResourceClass } = {
	artists: Artist,
	auth: Auth,
	cart: Cart,
	events: Event,
	external: External,
	organizations: Organization,
	regions: Regions,
	invitations: Invitations,
	status: Status,
	passwordReset: PasswordReset,
	users: Users,
	venues: Venue,
	orders: Orders,
	tickets: Tickets
} as any;
export default endpoints;
