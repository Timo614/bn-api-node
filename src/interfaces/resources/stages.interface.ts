export interface StagesInterface {
	readonly id?: string,
	readonly venue_id?: string,
	name: string,
	description?: string,
	capacity?: number,
	readonly created_at?: Date,
	readonly modified_at?: Date,
}

export const createStage = (base: any = {}): StagesInterface => {
	return {
		...{
			id: null,
			venue_id: null,
			name: "",
			description: null,
			capacity: null,
			created_at: null,
			modified_at: null
		},
		...base
	} as StagesInterface;
};