export enum BroadcastType {
	LAST_CALL = "LastCall"
}

export const BROADCAST_TYPE = {
	[BroadcastType.LAST_CALL]: "Last Call"
};

export enum BroadcastStatus {
	PENDING = "Pending",
	IN_PROGRESS = "InProgress",
	COMPLETED = "Completed",
	CANCELLED = "Cancelled"
}

export const BROADCAST_STATUS = {
	[BroadcastStatus.PENDING]: "Pending",
	[BroadcastStatus.IN_PROGRESS]: "In Progress",
	[BroadcastStatus.COMPLETED]: "Completed",
	[BroadcastStatus.CANCELLED]: "Cancelled",

};

export enum BroadcastChannel {
	PUSH_NOTIFICATION = "PushNotification"
}

export const BROADCAST_CHANNEL = {
	[BroadcastChannel.PUSH_NOTIFICATION]: "Push Notification"
};