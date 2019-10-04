import { AdjustmentTypes } from "../enums/adjustments.enum";

export interface AdjustmentsInterface {
	readonly id?: string,
	settlement_id: string,
	amount_in_cents: number,
	note: string,
	settlement_adjustment_type: AdjustmentTypes,
	readonly created_at?: Date,
	readonly modified_at?: Date,
}