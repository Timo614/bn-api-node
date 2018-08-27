export interface ArtistInterface {
  id: string;
  name: string;
  bio: string;
  website_url?: string;
  youtube_video_urls?: Array<string>;
  facebook_username?: string;
  instagram_username?: string;
  snapchat_username?: string;
  soundcloud_username?: string;
  bandcamp_username?: string;
}

export const createArtist = (base: any = {}): ArtistInterface => {
  return {
    ...{
      id: "",
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
