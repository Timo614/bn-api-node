export interface BoxOfficeOperatorInterface {
	operator_id: string,
	operator_name: number,
	events: Array<BoxOfficeEventInterface>,
	payments: Array<BoxOfficePaymentInterface>	
}

export interface BoxOfficePaymentInterface {
	payment_type: string,
	quantity: number,
	total_sales_in_cents: number
}

export interface BoxOfficeEventInterface {
	event_date: Date,
	event_name: string,
	face_value_in_cents: number,
	number_of_tickets: number,
	revenue_share_value_in_cents: number,
	total_sales_in_cents: number
}
