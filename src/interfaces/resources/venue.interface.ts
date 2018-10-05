export interface VenueInterface {
    id: string;
    organization_id?: string;
    region_id?:string;
    name: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    maximum_capacity?: number;
    readonly created_at: Date;
    readonly modified_at: Date;
}

export const createTicket = (base: any = {}): VenueInterface => {

	return {
		...{
			id: "",
			organization_id: "",
			region_id: "",
			name: "",
			address: "",
			city: "",
			state: "",
			country: "",
			zip: "",
			phone: "",
			latitude: 0,
			longitude: 0,
			maximum_capacity: 0,
			created_at: "",
			modified_at: "",
		},
		...base
	} as VenueInterface;
};
