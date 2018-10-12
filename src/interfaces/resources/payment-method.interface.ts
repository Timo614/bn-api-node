export interface PaymentMethodInterface {
	readonly id?: string;
	user_id: string;
	name: string;
	is_default: boolean;
	provider: string;
	provider_data: any;
	readonly created_at?: Date;
	readonly updated_at?: Date;
}

export const createPaymentMethod = (base: any = {}): PaymentMethodInterface => {
	return {
		...{
			id: "",
			user_id: "",
			name: "",
			is_default: false,
			provider: "",
			provider_data: {},
			created_at: "",
			updated_at: "",
		},
		...base
	} as PaymentMethodInterface;
};