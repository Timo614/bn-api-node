export interface OrganizationUserInterface {
    id?: string;
    organization_id: string;
    user_id: string;
}

export const createOrganizationUser = (base: any = {}): OrganizationUserInterface => {
	return {
		...{
			id: "",
			organization_id: "",
			user_id: ""
		},
		...base

	}as OrganizationUserInterface;
};