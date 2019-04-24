export interface LinkInterface {
	link: string;
}

export const createLink = (base: any = {}): LinkInterface => {
	return { link: "" } as LinkInterface;
};
