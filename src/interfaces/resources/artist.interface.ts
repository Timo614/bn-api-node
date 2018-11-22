export interface ArtistInterface {
    readonly id?: string;
    readonly organization_id?: string;
    is_private?: boolean;
    name: string;
    bio: string;
    website_url?: string;
    image_url?: string;
    thumb_image_url?: string;
    youtube_video_urls?: Array<string>;
    facebook_username?: string;
    instagram_username?: string;
    snapchat_username?: string;
    soundcloud_username?: string;
    bandcamp_username?: string;
    spotify_id?: string;
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createArtist = (base: any = {}): ArtistInterface => {
	return {
		...{
			organization_id: "",
			is_private: false,
			name: "",
			bio: "",
			website_url: "",
			image_url: "",
			thumb_image_url: "",
			youtube_video_urls: [],
			facebook_username: "",
			instagram_username: "",
			snapchat_username: "",
			soundcloud_username: "",
			bandcamp_username: "",
			spotify_id: ""
		},
		...base
	} as ArtistInterface;
};

