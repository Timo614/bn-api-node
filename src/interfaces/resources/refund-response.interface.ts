export interface RefundResponseInterface {
	readonly amount_refunded: number,
	readonly refund_breakdown: {[paymentMethod: string]: number}
}


export const createRefundResponse = (base: any = {}): RefundResponseInterface => {
	return {
		...{
			amount_refunded: 0,
			refund_breakdown: {}
		},
		...base
	} as RefundResponseInterface;
};