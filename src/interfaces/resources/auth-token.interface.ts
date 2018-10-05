export interface AuthTokenInterface {
    readonly access_token?: string;
    readonly refresh_token?: string;
}

export const createAuthToken = (base: any = {}): AuthTokenInterface => {
	return {
		...{
			access_token: "",
			refresh_token: ""
		},
		...base
	} as AuthTokenInterface;
};

