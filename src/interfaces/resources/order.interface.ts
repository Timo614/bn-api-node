export interface OrderInterface {
    id?: string;
    user_id: string;
    event_id: string;
}

export const createOrder = (base: any = {}): OrderInterface => {
    return {
        ... {
            id: "",
            user_id: "",
            event_id: ""
        },
        ...base
    }  as OrderInterface;
};