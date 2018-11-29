export interface OrganizationFanInterface {
	organization_id: string;
	user_id: string;
	first_name?: string;
	last_name?: string;
	email?: string;
	phone?: string;
	order_count: number;
	first_order_time: Date;
	last_order_time: Date;
	revenue_in_cents: number;
}

export const createOrganizationFan = (base: any = {}): OrganizationFanInterface => {
	return {
		...{
			organization_id: "",
			user_id: "",
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			order_count: "",
			first_order_time: "",
			last_order_time: "",
			revenue_in_cents: 0,
		},
		...base

	}as OrganizationFanInterface;
};
