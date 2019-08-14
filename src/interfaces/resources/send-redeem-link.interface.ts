export interface SendPublicRedeemLinkResultInterface {
	url: string;
	order_id: string;
	for_user_id: string;
	signature: string;
}

export const createSendPublicRedeemLinkResult = (base: any = {}): SendPublicRedeemLinkResultInterface => {
	return {
		...{
			url: "",
			order_id: "",
			for_user_id: "",
			signature: ""
		},
		...base
	} as SendPublicRedeemLinkResultInterface;
};
