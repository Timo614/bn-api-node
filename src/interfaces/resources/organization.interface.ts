export interface OrganizationInterface {
	id?: string;
	fee_schedule_id?: string;
	name: string;
	address?: string;
	city?: string;
	state?: string;
	country?: string;
	postal_code?: string;
	client_event_fee_in_cents: number;
	company_event_fee_in_cents: number;
	event_fee_in_cents?: number;
	phone?: string;
	sendgrid_api_key?: string;
	google_ga_key?: string;
	facebook_pixel_key?: string;
	allowed_payment_providers?: string,
	timezone?:string,
	cc_fee_percent?: number
}

export const createOrganization = (base: any = {}): OrganizationInterface => {
	return {
		...{
			id: "",
			fee_schedule_id: "",
			name: "",
			address: "",
			city: "",
			state: "",
			country: "",
			postal_code: "",
			phone: "",
			client_event_fee_in_cents: 0,
			company_event_fee_in_cents: 0,
			event_fee_in_cents: 0,
			sendgrid_api_key: "",
			google_ga_key: "",
			facebook_pixel_key: "",
			allowed_payment_providers: "Stripe",
			timezone: "",
			cc_fee_percent: 0
		},
		...base
	} as OrganizationInterface
};