export interface OrganizationInterface {
    id?: string;
    owner_user_id: string;
	fee_schedule_id?:string;
	name: string;
	address?: string;
	city?: string;
	state?: string;
	country?: string;
	postal_code?: string;
	event_fee_in_cents?: number;
	phone?: string;
}

export const createOrganization = (base: any = {}): OrganizationInterface => {
	return {
		...{
			id: "",
			owner_user_id: "",
			fee_schedule_id: "",
			name: "",
			address: "",
			city: "",
			state: "",
			country: "",
			postal_code: "",
			phone: "",
			event_fee_in_cents: 0,
		},
		...base
	} as OrganizationInterface
};