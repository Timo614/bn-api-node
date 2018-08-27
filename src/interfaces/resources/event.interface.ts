export interface EventInterface {
  id?: string;
  name: string;
  organization_id: string;
  venue_id: string;
  created_at?: Date;
  ticket_sell_date?: Date;
  event_start: Date;
  is_external: boolean;
  external_url?: string;
}
