export interface EventSummarySalesRowInterface {
	ticket_name: string,
	pricing_name: string,
	total_client_fee_in_cents: number,
	total_company_fee_in_cents: number,
	price_in_cents: number,
	online_count: number,
	box_office_count: number,
	comp_count: number,
	total_sold: number,
	total_gross_income_in_cents: number,
	ticket_type_id: string,
	ticket_pricing_id: string,
}

export interface EventSummaryFeesRowInterface {
	ticket_type_id: string,
	ticket_pricing_id: string,
	ticket_name: string,
	pricing_name: string,
	total_sold: number,
	comp_count: number,
	online_count: number,
	price_in_cents: number,
	total_company_fee_in_cents: number,
	company_fee_in_cents: number,
	total_client_fee_in_cents: number,
	client_fee_in_cents: number,
}

export interface EventSummaryOtherFeesInterface {
	unit_price_in_cents: number,
	total_company_fee_in_cents: number,
	company_fee_in_cents: number,
	total_client_fee_in_cents: number,
	client_fee_in_cents: number,
}