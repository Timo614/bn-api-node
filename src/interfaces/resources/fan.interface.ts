export interface FanInterface {
	user_id: string,
	first_name?:string,
	last_name?:string,
	email?:string,
	phone?:string,
	thumb_profile_pic_url?:string,
	organization_id: string,
	order_count: number,
	created_at: Date,
	first_order_time: Date,
	last_order_time: Date,
	revenue_in_cents: number,
}

export const createFan = (base: any = {}): FanInterface => {
	return {
		...{
			user_id: "",
			first_name:"",
			last_name:"",
			email:"",
			phone:"",
			thumb_profile_pic_url:"",
			organization_id: "",
			order_count: 0,
			created_at: "",
			first_order_time: "",
			last_order_time: "",
			revenue_in_cents: 0,
		},
		...base
	} as FanInterface;
};