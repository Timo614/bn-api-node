export interface RegionInterface {
    readonly id?: string;
    name: string;
    readonly created_at?: string;
    readonly updated_at?: string;
}

export const createRegion = (base: any = {}): RegionInterface => {
	return {
		...{
			id: "",
			name: "",
			created_at: "",
			updated_at: "",
		},
		...base
	} as RegionInterface;
};