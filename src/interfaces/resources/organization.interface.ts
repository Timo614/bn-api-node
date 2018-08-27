import { VenueInterface } from "./venue.interface";

export interface OrganizationInterface {
  id?: string;
  owner_user_id: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  phone?: string;
  venues?: Array<VenueInterface>;
}
