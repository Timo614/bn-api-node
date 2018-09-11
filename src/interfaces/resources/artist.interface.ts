export interface ArtistInterface {
    readonly id?: string;
    name: string;
    bio: string;
    website_url?: string;
    youtube_video_urls?: Array<string>;
    facebook_username?: string;
    instagram_username?: string;
    snapchat_username?: string;
    soundcloud_username?: string;
    bandcamp_username?: string;
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createArtist = (base: any = {}): ArtistInterface => {
    return {
        ...{
            name: "",
            bio: "",
            website_url: "",
            youtube_video_urls: [],
            facebook_username: "",
            instagram_username: "",
            snapchat_username: "",
            soundcloud_username: "",
            bandcamp_username: ""
        },
        ...base
    } as ArtistInterface;
};

