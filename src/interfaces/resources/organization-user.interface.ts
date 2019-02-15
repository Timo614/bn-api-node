export interface OrganizationUserInterface {
	id?: string;
	organization_id: string;
	user_id: string;
	event_ids: Array<string>;
}

export const createOrganizationUser = (
	base: any = {}
): OrganizationUserInterface => {
	return {
		...{
			id: "",
			organization_id: "",
			user_id: "",
			event_ids: []
		},
		...base
	} as OrganizationUserInterface;
};
