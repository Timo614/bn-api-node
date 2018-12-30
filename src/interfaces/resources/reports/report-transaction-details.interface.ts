export interface ReportTransactionDetailsInterface {
	event_name: string,
	ticket_name: string,
	quantity: number,
	unit_price_in_cents: number,
	gross: number,
	company_fee_in_cents: number,
	client_fee_in_cents: number,
	order_type: string,//TODO replace with an ENUM
	payment_method: string, //TODO Replace with an ENUM
	transaction_date: Date,
	redemption_code?: null,
	order_id: string,
	event_id: string,
	user_id: string
}