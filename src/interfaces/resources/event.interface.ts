import {createTicket, TicketInterface} from "./ticket.interface";

export interface EventInterface {
    id?: string;
    name: string;
    organization_id: string;
    venue_id: string;
    event_start: Date;
    door_time: Date;
    publish_date: Date;
    is_external: boolean;
    promo_image_url?: string;
    additional_info?: string;
    age_limit?: number;
    external_url?: string;
    created_at?: Date;
    ticket_sell_date?: Date;
    tickets: Array<TicketInterface>;
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
            tickets: []
        },
        ...base
    } as EventInterface;
};