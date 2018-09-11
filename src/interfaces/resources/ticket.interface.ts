import {createTicketPricing, TicketPricingInterface} from "./ticket-pricing.interface";

export interface TicketInterface {
    readonly id?: string;
    event_id: string;
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    quantity: number;
    limit: number;//Per person
    price_points: Array<TicketPricingInterface>;
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createTicket = (base: any = {}): TicketInterface => {
    if (base && base.price_points) {
        base.price_points = base.price_points.map((ticketPricing: any) => createTicketPricing(ticketPricing));
    }
    return {
        ...{
            id: "",
            event_id: "",
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            quantity: 0,
            limit: 0,//Per person
            price_points: [],
            created_at: "",
            updated_at: "",
        },
        ...base
    } as TicketInterface;
};