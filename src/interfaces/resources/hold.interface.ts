import { CartItemInterface } from "./cart-item.interface";

export interface HoldInterface {
	readonly id?: string;
	event_id?: string;
	name: string;
	items: Array<CartItemInterface>
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createHold = (base: any = {}): HoldInterface => {
	return {
		...{
			id: "",
			event_id: "",
			name: "",
			items: [],
			created_at: "",
			updated_at: ""
		},
		...base
	} as HoldInterface
};