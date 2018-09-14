export interface EventArtistInterface {
    id?: string;
    event_id: string;
    artist_id: string;
    rank: number;
    set_time: Date;
    readonly created_at?:Date;
    readonly updated_at?:Date;
}

export const createEventArtist = (base: any = {}): EventArtistInterface => {
	return {
		... {
			id: "",
			event_id: "",
			artist_id: "",
			rank: 0,
			set_time: "",

		},
		...base
	}  as EventArtistInterface;
};