import Artist from "./artists";
import Auth from "./auth";
import Cart from "./cart";
import Code from "./codes";
import Comps from "./comps";
import Event from "./events";
import External from "./external";
import Holds from "./holds";
import Invitations from "./invitations";
import Organization from "./organization";
import Regions from "./regions";
import Reports from "./reports";
import Status from "./status";
import UserInvites from "./user-invitations";
import Users from "./users";
import Venue from "./venues";
import Orders from "./orders";
import Tickets from "./tickets";
import { ResourceInterface } from "../interfaces/server/resource";
import ResourceClass from "../classes/abstracts/resource.class";
import PasswordReset from "./password-reset";
import PaymentMethods from "./payment-methods";

/**
 * List of available endpoints
 * @endpoint artists [[ArtistsResource]]
 * @endpoint auth [[AuthResource]]
 * @endpoint cart [[CartResource]]
 * @endpoint codes [[CodesResource]]
 * @endpoint comps [[CompsResource]]
 * @endpoint events [[EventsResource]]
 * @endpoint events.artists [[EventArtistsResource]]
 * @endpoint events.codes [[EventCodesResource]]
 * @endpoint events.interests [[EventInterestsResource]]
 * @endpoint events.fans [[EventFansResource]]
 * @endpoint events.guests [[EventGuestsResource]]
 * @endpoint events.holds [[EventHoldsResource]]
 * @endpoint events.ticketTypes [[EventTicketTypesResource]]
 * @endpoint events.tickets [[EventTicketsResource]]
 * @endpoint external [[ExternalResource]]
 * @endpoint holds [[HoldsResource]]
 * @endpoint holds.comps [[HoldCompsResource]]
 * @endpoint invitations [[InvitationsResource]]
 * @endpoint orders [[OrdersResource]]
 * @endpoint orders.tickets [[OrderTicketsResource]]
 * @endpoint organizations [[OrganizationsResource]]
 * @endpoint organizations.artists [[OrganizationArtistsResource]]
 * @endpoint organizations.events [[OrganizationEventsResource]]
 * @endpoint organizations.fans [[OrganizationFansResource]]
 * @endpoint organizations.feeSchedules [[OrganizationFeeSchedulesResource]]
 * @endpoint organizations.invite [[OrganizationInvitationsResource]]
 * @endpoint organizations.owner [[OrganizationOwnersResource]]
 * @endpoint organizations.users [[OrganizationUsersResource]]
 * @endpoint organizations.venues [[OrganizationVenueResource]]
 * @endpoint passwordReset [[PasswordResetResource]]
 * @endpoint paymentMethods [[PaymentMethodsResource]]
 * @endpoint regions [[RegionsResource]]
 * @endpoint reports [[ReportsResource]]
 * @endpoint status [[StatusResource]]
 * @endpoint tickets [[TicketsResource]]
 * @endpoint tickets.redeem [[TicketRedeemResource]]
 * @endpoint userInvites [[UserInvitationsResource]]
 * @endpoint users [[UsersResource]]
 * @endpoint users.deviceTokens [[UserDeviceTokensResource]]
 * @endpoint users.invites [[UserInvitationsResource]]
 * @endpoint venues [[VenuesResource]]
 * @endpoint venues.events [[VenueEventsResource]]
 */
export const endpoints: { [endpoint: string]: ResourceInterface | ResourceClass } = {
	artists: Artist,
	auth: Auth,
	cart: Cart,
	codes: Code,
	comps: Comps,
	events: Event,
	external: External,
	holds: Holds,
	organizations: Organization,
	regions: Regions,
	invitations: Invitations,
	status: Status,
	passwordReset: PasswordReset,
	paymentMethods: PaymentMethods,
	reports: Reports,
	userInvites: UserInvites,
	users: Users,
	venues: Venue,
	orders: Orders,
	tickets: Tickets
} as any;
export default endpoints;
