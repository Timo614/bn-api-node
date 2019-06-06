import { TransferStatus } from "../enums/transfers.enum";

export interface TransferInterface {
	readonly id?: string;
	source_user_id?: string;
	destination_user_id?: string;
	transfer_key?: string;
	status?: TransferStatus;
	readonly created_at?: Date;
	readonly updated_at?: Date;
	transfer_message_type?: string;
	transfer_address?: string;
	ticket_ids: Array<string>
}

export const createTransfer = (base: any = {}): TransferInterface => {
	return {
		...{
			id: "",
			source_user_id: "",
			destination_user_id: "",
			transfer_key: "",
			status: "",
			created_at: "",
			updated_at: "",
			transfer_message_type: "",
			transfer_address: "",
			ticket_ids: []
		},
		...base
	} as TransferInterface;
};