export interface EventInterface {
    id?: string;
    name: string;
    organization_id: string;
    venue_id: string;
    created_at?: Date;
    ticket_sell_date?: Date;
    event_start: Date;
    is_external: boolean;
    external_url?: string;
}

export const createEvent = (base: any = {}): EventInterface => {
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
            external_url: ""
        },
        ...base
    } as EventInterface;
};
