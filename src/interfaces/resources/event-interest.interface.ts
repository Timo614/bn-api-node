export interface EventInterestInterface {
    readonly id?: string;
    event_id: string;
    user_id: string;
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createEventInterest = (base: any = {}): EventInterestInterface => {
	return {
		...{
			id: "",
			event_id: "",
			user_id: "",
			created_at: "",
			updated_at: ""
		},
		...base
	} as EventInterestInterface;
};