export interface EventArtistInterface {
    id?: string;
    event_id: string;
    artist_id: string;
    rank: number;
}

export const createEventArtist = (base: any = {}): EventArtistInterface => {
    return {
        ... {
            id: "",
            event_id: "",
            artist_id: "",
            rank: 0
        },
        ...base
    }  as EventArtistInterface;
};