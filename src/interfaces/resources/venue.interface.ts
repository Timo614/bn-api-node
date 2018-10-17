export interface VenueInterface {
    id: string;
    organization_id?: string;
    region_id?:string;
    name: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
	postal_code: string;
	maximum_capacity?: number;
	is_private: boolean;
    readonly created_at: Date;
    readonly modified_at: Date;
}

export const createVenue = (base: any = {}): VenueInterface => {

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
			phone: "",
			// latitude: 0,
			// longitude: 0,
			postal_code: "",
			// maximum_capacity: 0,
			created_at: "",
			// modified_at: "",
			is_private: false,
		},
		...base
	} as VenueInterface;
};
