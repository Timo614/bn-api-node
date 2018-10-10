export interface ServerInterface {
	/**
	 * http or https
	 * @default "http"
	 */
    protocol: string;
	/**
	 * @default "localhost"
	 */
	host: string;
	/**
	 * @default 0
	 */
    port?: number;
	/**
	 * A string that is appended to the url such as /v1 or /api
	 * @default ""
	 */
	basePath: string;
	/**
	 * @default "v1"
	 */
    apiVersion: string;
	/**
	 * If prefix is supplied it is used as the absolute url
	 * @default ""
	 */
	prefix: string;
	/**
	 * Request timeout
	 * @default 3000
	 */
    timeout: number;
	/**
	 * If this is set to true then all responses come back with only the data portion
	 * Otherwise they include the request and response
	 * @default false
	 */
	returnDataOnly: boolean;
}

export const createServer = (base: any = {}): ServerInterface => {
	base.prefix =
        base.prefix ||
        false;

	let instance = {
		...{
			protocol: "http",
			host: "localhost",
			port: 0,
			basePath: "",
			apiVersion: "v1",
			timeout: 3000,
			prefix: false,
			returnDataOnly: false
		},
		...base
	};
	instance.prefix = instance.prefix || `${instance.protocol}://${instance.host}${instance.port ? `:${instance.port}`: ""}${instance.basePath}`;
	return instance as ServerInterface;
};
