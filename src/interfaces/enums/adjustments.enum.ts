export enum AdjustmentTypes {
	MANUAL_CREDIT = "ManualCredit",
	MANUAL_DEDUCTION = "ManualDeduction",
	CHARGE_BACK = "Chargeback"
}

export const ADJUSTMENT_TYPES = {
	[AdjustmentTypes.MANUAL_CREDIT]: "Manual Credit",
	[AdjustmentTypes.MANUAL_DEDUCTION]: "Manual Deduction",
	[AdjustmentTypes.CHARGE_BACK]: "Charge Back"
};
