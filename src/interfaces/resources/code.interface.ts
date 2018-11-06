export interface CodeInterface {

	readonly id?: string;
	readonly event_id: string;
	name: string;
	code_type: string;
	redemption_code: string;
	max_uses: number;
	discount_in_cents: number;
	start_date: Date;
	end_date: Date;
	max_tickets_per_user?: number;
	ticket_type_ids: Array<string>;
	readonly created_at?: Date;
	readonly updated_at?: Date;


}

export const createCode = (base: any = {}): CodeInterface => {
	return {
		...{
			id: "",
			event_id: "",
			name: "",
			code_type: "",
			redemption_code: "",
			max_uses: 0,
			discount_in_cents: 0,
			start_date: Date,
			end_date: Date,
			max_tickets_per_user: 0,
			ticket_type_ids: [],
			created_at: "",
			updated_at: ""
		},
		...base
	} as CodeInterface
};