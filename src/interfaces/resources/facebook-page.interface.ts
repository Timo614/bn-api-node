export interface FacebookPageInterface {
	id: string;
	name: string;
}

export const createFacebookPage = (base: any = {}): FacebookPageInterface => {
	return {
		...{ id: "", name: "" },
		...base
	} as FacebookPageInterface;
};
