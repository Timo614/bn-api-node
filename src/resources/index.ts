import Admin from "./admin";
import Artist from "./artists";
import Auth from "./auth";
import Broadcast from "./broadcasts";
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
import Settlements from "./settlements";
import Stages from "./stages";
import Status from "./status";
import UserInvites from "./user-invitations";
import Users from "./users";
import Venue from "./venues";
import Orders from "./orders";
import Tickets from "./tickets";
import Transfers from "./transfers";
import { ResourceInterface } from "../interfaces/server/resource";
import ResourceClass from "../classes/abstracts/resource.class";
import PasswordReset from "./password-reset";
import PaymentMethods from "./payment-methods";
import RedemptionCodes from "./redemption-codes";

/**
 * List of available endpoints
 * @endpoint admin [[AdminResource]]
 * @endpoint artists [[ArtistsResource]]
 * @endpoint auth [[AuthResource]]
 * @endpoint broadcasts [[BroadcastsResource]]
 * @endpoint cart [[CartResource]]
 * @endpoint codes [[CodesResource]]
 * @endpoint comps [[CompsResource]]
 * @endpoint events [[EventsResource]]
 * @endpoint events.artists [[EventArtistsResource]]
 * @endpoint events.broadcasts [[EventBroadcastsResource]]
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
 * @endpoint organizations.settlements [[OrganizationSettlementsResource]]
 * @endpoint organizations.users [[OrganizationUsersResource]]
 * @endpoint organizations.venues [[OrganizationVenueResource]]
 * @endpoint passwordReset [[PasswordResetResource]]
 * @endpoint paymentMethods [[PaymentMethodsResource]]
 * @endpoint redemptionCodes [[RedemptionCodeResource]]
 * @endpoint regions [[RegionsResource]]
 * @endpoint reports [[ReportsResource]]
 * @endpoint settlements [[SettlementsResource]]
 * @endpoint stages [[StagesResource]]
 * @endpoint status [[StatusResource]]
 * @endpoint transfers [[TransfersResource]]
 * @endpoint tickets [[TicketsResource]]
 * @endpoint tickets.redeem [[TicketRedeemResource]]
 * @endpoint userInvites [[UserInvitationsResource]]
 * @endpoint users [[UsersResource]]
 * @endpoint users.deviceTokens [[UserDeviceTokensResource]]
 * @endpoint users.invites [[UserInvitationsResource]]
 * @endpoint venues [[VenuesResource]]
 * @endpoint venues.events [[VenueEventsResource]]
 * @endpoint venues.stages [[VenueStagesResource]]
 */
export const endpoints: {
[endpoint: string]: ResourceInterface | ResourceClass;
} = {
	admin: Admin,
	artists: Artist,
	auth: Auth,
	broadcasts: Broadcast,
	cart: Cart,
	codes: Code,
	comps: Comps,
	events: Event,
	external: External,
	holds: Holds,
	invitations: Invitations,
	orders: Orders,
	organizations: Organization,
	passwordReset: PasswordReset,
	paymentMethods: PaymentMethods,
	redemptionCodes: RedemptionCodes,
	regions: Regions,
	reports: Reports,
	settlements: Settlements,
	stages: Stages,
	status: Status,
	tickets: Tickets,
	transfers: Transfers,
	userInvites: UserInvites,
	users: Users,
	venues: Venue
} as any;
export default endpoints;
