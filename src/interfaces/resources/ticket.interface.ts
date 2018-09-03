import {createTicketPricing, TicketPricingInterface} from "./ticket-pricing.interface";

export interface TicketInterface {
    id?: string;
    event_id: string;
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    quantity: number;
    limit: number;//Per person
    pricing: Array<TicketPricingInterface>;
}

export const createTicket = (base: any = {}): TicketInterface => {
    if (base && base.pricing) {
        base.pricing = base.pricing.map((ticketPricing: any) => createTicketPricing(ticketPricing));
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
            pricing: []
        },
        ...base
    } as TicketInterface;
};