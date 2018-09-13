import Artist from './artists';
import Auth from './auth';
import Cart from './cart';
import Event from './event';
import EventArtist from './event-artists';
import EventInterest from './event-interests';
import EventTicket from './event-tickets';
import External from './external';
import Invitations from './invitations';
import Organization from './organization';
import Regions from './regions';
import Status from './status';
import TicketPricing from './ticket-pricing';

import Users from './users';
import Venue from './venue';

export default {
    artist: Artist,
    auth: Auth,
    cart: Cart,
    event: Event,
    eventArtist: EventArtist,
    eventInterest:EventInterest,
    eventTicket: EventTicket,
    external: External,
    organization: Organization,
    region: Regions,
    invitation: Invitations,
    status: Status,
    ticketPricing: TicketPricing,
    users: Users,
    venue: Venue
}
