import { createArtist } from "./artist.interface";
import { createAuthToken } from "./auth-token.interface";
import { createEvent } from "./event.interface";
import { createEventArtist } from "./event-artist.interface";
import { createEventHistory } from "./event-histories.interface";
import { createEventInterest } from "./event-interest.interface";
import { createOrder } from "./order.interface";
import { createOrganization } from "./organization.interface";
import { createOrganizationVenue } from "./organization-event.interface";
import { createOrganizationInvitation } from "./organization-invitation.interface";
import { createOrganizationUser } from "./organization-user.interface";
import { createRegion } from "./region.interface";
import { createTicket } from "./ticket.interface";
import { createTicketRedeemable } from "./ticket-redeemable.interface";
import { createTicketTransferAuthorization } from "./ticket-transfer-authorization.interface";
import { createUser } from "./user.interface";
import { createPaymentMethod } from "./payment-method.interface";
import { createVenue } from "./venue.interface";
export default {
	createArtist,
	createAuthToken,
	createEvent,
	createEventArtist,
	createEventHistory,
	createEventInterest,
	createOrder,
	createOrganization,
	createOrganizationVenue,
	createOrganizationInvitation,
	createOrganizationUser,
	createPaymentMethod,
	createRegion,
	createTicket,
	createTicketRedeemable,
	createTicketTransferAuthorization,
	createUser,
	createVenue,
};