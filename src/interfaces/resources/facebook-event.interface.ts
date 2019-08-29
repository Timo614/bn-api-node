export interface FacebookEventInterface {
	id: string;
}

export const createFacebookEvent = (base: any = {}): FacebookEventInterface => {
	return {
		...{ id: "" },
		...base
	} as FacebookEventInterface;
};
