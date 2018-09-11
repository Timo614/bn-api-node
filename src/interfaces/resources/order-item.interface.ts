export interface OrderItemInterface {
    readonly id?: string;
    order_id?: string;
    item_type: string;
    cost: number;
    ticket_instance_id: string;
    price_point_id?: string;
    fee_schedule_range_id?: string;
    parent_id?: string;
    readonly created_at?: string;
    readonly updated_at?: string;


}

export const createOrderItem = (base: any = {}): OrderItemInterface => {
    return {
        ...{
            id: "",
            order_id: "",
            item_type: "",
            cost: 0,
            ticket_instance_id: "",
            price_point_id: "",
            fee_schedule_range_id: "",
            parent_id: "",
            created_at: "",
            updated_at: "",
        },
        ...base
    } as OrderItemInterface;
};