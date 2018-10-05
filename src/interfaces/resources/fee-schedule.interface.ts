export interface FeeScheduleInterface {
	readonly id?: string;
	name: string;
	ranges: Array<FeeScheduleRangeInterface>;
	readonly version?: number;
	readonly created_at?: Date;
	readonly updated_at?: Date;

}

export interface FeeScheduleRangeInterface {
	min_price: number;
	fee_in_cents: number;
}

export const createFeeSchedule = (base: any = {}): FeeScheduleInterface => {
	if (base && base.ranges) {
		base.ranges = base.ranges.map((range: any) => createFeeScheduleRange(range));
	}
	return {
		...{
			id: "",
			name: "",
			ranges: [],
			version: 0,
			created_at: "",
			updated_at: ""
		},
		...base
	} as FeeScheduleInterface;
};

export const createFeeScheduleRange = (base: any = {}): FeeScheduleRangeInterface => {
	return {
		...{
			min_price: 0,
			fee_in_cents: 0
		},
		...base
	} as FeeScheduleRangeInterface;
};