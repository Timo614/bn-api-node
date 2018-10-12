export interface TicketTransferAuthorizationInterface {
	readonly id?: string;
	transfer_key: string;
	sender_user_id: string;
	signature: string;
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createTicketTransferAuthorization = (base: any = {}): TicketTransferAuthorizationInterface => {
	return {
		...{
			id: "",
			transfer_key: "",
			sender_user_id: "",
			signature: "",
			created_at: "",
			updated_at: "",
		},
		...base
	} as TicketTransferAuthorizationInterface;
};