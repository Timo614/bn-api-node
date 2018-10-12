export interface TicketRedeemableInterface {
	readonly id: string;
	ticket_type: string;
	user_id: string;
	first_name: string;
	last_name: string;
	email?: string;
	phone?: string;
	redeem_key?: string;
	redeem_date?: Date;
	status: string;
	event_id: string;
	event_name: string;
	door_time?: Date;
	event_start?: Date;
	venue_id?: string;
	venue_name: string;
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createTicketRedeemable = (base: any = {}): TicketRedeemableInterface => {
	return {
		...{
			id: "",
			ticket_type: "",
			user_id: "",
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			redeem_key: "",
			redeem_date: "",
			status: "",
			event_id: "",
			event_name: "",
			door_time: "",
			event_start: "",
			venue_id: "",
			venue_name: "",
			created_at: "",
			updated_at: "",
		},
		...base
	} as TicketRedeemableInterface;
};