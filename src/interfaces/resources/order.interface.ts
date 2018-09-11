import {OrderItemInterface} from "./order-item.interface";

export interface OrderInterface {
    readonly id?: string;
    user_id: string;
    order_items: Array<OrderItemInterface>;
    readonly status?: string;
    readonly order_type?: string;
    readonly expires_at?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
}

export const createOrder = (base: any = {}): OrderInterface => {
    return {
        ...{
            id: "",
            user_id: "",
            order_items: [],
            status: "",
            order_type: "",
            expires_at: "",
            created_at: "",
            updated_at: "",
        },
        ...base
    } as OrderInterface;
};