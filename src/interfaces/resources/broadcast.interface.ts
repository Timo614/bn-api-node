import { BroadcastStatus, BroadcastType, BroadcastChannel } from "../enums/broadcasts.enum";

export interface BroadcastInterface {
	readonly id: string,
	readonly event_id: string,
	notification_type: BroadcastType,
	channel: BroadcastChannel,
	name: string,
	message?: string,
	send_at?: Date,
	status: BroadcastStatus,
	progress: number,
	readonly created_at: Date,
	readonly updated_at: Date,
}

export const createBroadcast = (base: any = {}): BroadcastInterface => {

	return {
		...{
			id: null,
			event_id: null,
			notification_type: BroadcastType.LAST_CALL,
			channel: BroadcastChannel.PUSH_NOTIFICATION,
			name: "",
			message: null,
			send_at: null,
			status: BroadcastStatus.PENDING,
			progress: 0,
			created_at: null,
			updated_at: null
		},
		...base
	} as BroadcastInterface;
};