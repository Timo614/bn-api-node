export enum TransferStatus {
	PENDING = "Pending",
	CANCELLED = "Cancelled",
	COMPLETED = "Completed"
}

export const TRANSFER_TYPES_STRING = {
	[TransferStatus.PENDING]: "Pending",
	[TransferStatus.CANCELLED]: "Cancelled",
	[TransferStatus.COMPLETED]: "Completed"
};