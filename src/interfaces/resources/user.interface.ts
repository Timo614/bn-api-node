import { UserRole } from "../enums/user-roles.enum";

export interface UserInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password?: string;
  hashed_pw?: string;
  password_modified_at: string;
  created_at: string;
  last_used: string;
  active: boolean;
  role: Array<UserRole>;
  password_reset_token?: string;
  password_reset_requested_at?: string;
}
