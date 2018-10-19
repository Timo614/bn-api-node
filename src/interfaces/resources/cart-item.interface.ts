export interface CartItemInterface {
    ticket_type_id: string;
    quantity: number;
}

export const createCartItem = (base: any = {}): CartItemInterface => {
	return {
		...{
			ticket_type_id: "",
			quantity: 1
		},
		...base
	} as CartItemInterface;
};