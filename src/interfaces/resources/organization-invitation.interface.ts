export interface OrganizationInvitationInterface {
  id?: string;
  organization_id: string;
  inviter_id: string;
  user_email: String;
  create_at?: Date;
  security_token?: string;
  user_id?: string;
  status_change_at?: Date;
  accepted?: number;
}
