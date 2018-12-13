import { DeviceTokenSource } from "../enums/device-tokens.enum";

export interface DeviceTokenInterface {
    readonly id?: string;
    token_source: string;
    token: DeviceTokenSource;
    readonly last_notification_at?:Date;
    readonly created_at?: Date;
}

export const createDeviceToken  = (base: any = {}): DeviceTokenInterface => {
	return {
		...{
			id: "",
			token_source: "",
			token: "",
			last_notification_at: "",
			created_at: ""
		},
		...base
	} as DeviceTokenInterface;
};