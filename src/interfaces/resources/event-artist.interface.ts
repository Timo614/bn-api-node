import { ArtistInterface, createArtist } from "./artist.interface";

export interface EventArtistInterface {
    id?: string;
    event_id: string;
    artist: ArtistInterface,
    rank: number;
    set_time: Date;
    readonly created_at?:Date;
    readonly updated_at?:Date;
}

export const createEventArtist = (base: any = {}): EventArtistInterface => {
	if (base && base.artist) {
		base.artist = createArtist(base.artist);
	}
	return {
		... {
			id: "",
			event_id: "",
			artist: {},
			rank: 0,
			set_time: "",
		},
		...base
	}  as EventArtistInterface;
};