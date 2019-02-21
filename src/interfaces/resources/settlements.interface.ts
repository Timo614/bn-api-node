import { EventInterface } from "./event.interface";
import { SettlementStatus, SettlementTransactionType } from "../enums/settlements.enum";

export interface SettlementsInterface {
	readonly id?: string,
	organization_id: string,
	user_id: string,
	start_time: Date,
	end_time: Date,
	status: SettlementStatus,
	comment?: string,
	only_finished_events: boolean,
	readonly created_at?: Date,
	readonly modified_at?: Date,
}

export interface SettlementTransactionsInterface {
	readonly id?: string,
	settlement_id: string,
	event_id: string,
	order_item_id?: string,
	settlement_status: SettlementStatus,
	transaction_type: SettlementTransactionType,
	value_in_cents: number,
	comment?: string,
	readonly created_at?: Date,
	readonly modified_at?: Date,
}

export interface DisplaySettlementInterface {
	readonly settlement: SettlementsInterface,
	readonly transactions: Array<SettlementTransactionsInterface>,
	readonly events: Array<EventInterface>,
}

export interface PendingSettlementInterface {
	organization_id: string,
	user_id: string,
	start_time: Date,
	end_time: Date,
	status: SettlementStatus,
	comment?: string,
	only_finished_events: boolean,
	sales_per_event: {string: any},//TicketSalesAndCounts
	transactions: Array<SettlementTransactionsInterface>
}

export interface NewSettlementRequestInterface {
	start_utc: Date,
	end_utc: Date,
	comment?: string,
	only_finished_events?: boolean,
	adjustments?: Array<SettlementTransactionsInterface>,

}