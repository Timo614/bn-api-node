export interface TicketPricingInterface {
    id?: string;
    ticket_id: string;
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    value: number;
}

export const createTicketPricing = (base: any = {}): TicketPricingInterface => {
    return {
        ...{
            id: "",
            ticket_id: "",
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            value: 0,
        },
        ...base
    } as TicketPricingInterface;
};