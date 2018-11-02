export interface UserInterface {
	id?: string;
	first_name?: string;
	last_name?: string;
	email: string;
	phone?: string;
	profile_pic_url?: string;
	thumb_profile_pic_url?: string;
	cover_photo_url?: string;
	is_org_owner?: boolean;
}

export const createUser = (base: any = {}): UserInterface => {
	return {
		...{
			id: "",
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			profile_pic_url: "",
			thumb_profile_pic_url: "",
			cover_photo_url: "",
			is_org_owner: false
		},
		...base

	}as UserInterface;
};