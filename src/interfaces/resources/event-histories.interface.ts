export interface EventHistoryInterface {
    id?: string;
    event_id: string;
    order_id: string;
    user_id: string;
    protocol_reference_hash: string;
}

export const createEventHistory = (base: any = {}): EventHistoryInterface => {
	return {
		...{
			id: "",
			event_id: "",
			order_id: "",
			user_id: "",
			protocol_reference_hash: ""
		},
		...base
	}  as EventHistoryInterface;
};