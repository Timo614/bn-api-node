export enum SettlementStatus {
	PENDING_SETTLEMENT = "PendingSettlement",
	REQUIRES_AUDIT = "RequiresAudit",
	SETTLED_IN_FULL = "SettledInFull"
}

export const SETTLEMENT_STATUS = {
	[SettlementStatus.PENDING_SETTLEMENT]: "Pending Settlement",
	[SettlementStatus.REQUIRES_AUDIT]: "Requires Audit",
	[SettlementStatus.SETTLED_IN_FULL]: "Settled in Full"
};

export enum SettlementTransactionType {
	ORDER_ITEM = "OrderItem",
	MANUAL = "Manual",
	REPORT = "Report"
}

export const SETTLEMENT_TRANSACTION_TYPE = {
	[SettlementTransactionType.ORDER_ITEM]: "Order Item",
	[SettlementTransactionType.MANUAL]: "Manual Entry",
	[SettlementTransactionType.REPORT]: "Report Calculated"
};