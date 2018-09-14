export interface OrganizationInvitationInterface {
    id?: string;
    organization_id: string;
    inviter_id: string;
    user_email: string;
    create_at?: Date;
    security_token?: string;
    user_id?: string;
    status_change_at?: Date;
    accepted?: number;
}

export const createOrganizationInvitation = (base: any = {}): OrganizationInvitationInterface => {
	return {
		...{
			id: "",
			organization_id: "",
			inviter_id: "",
			user_email: "",
			create_at: "",
			security_token: "",
			user_id: "",
			status_change_at: "",
			accepted: 0
		},
		...base

	}as OrganizationInvitationInterface;
};