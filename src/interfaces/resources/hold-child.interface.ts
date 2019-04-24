export interface HoldChildInterface {

	readonly id?: string;
	event_id?: string;
	hold_id?: string;
	name: string;
	phone?: string;
	email?: string;
	quantity: number;
	redemption_code: string;
	readonly created_at?: Date;
	readonly updated_at?: Date;


}

export const createHoldChild = (base: any = {}): HoldChildInterface => {
	return {
		...{
			id: "",
			event_id: "",
			hold_id: "",
			name: "",
			phone: "",
			email: "",
			quantity: 0,
			redemption_code: "",
			created_at: "",
			updated_at: ""
		},
		...base
	} as HoldChildInterface
};