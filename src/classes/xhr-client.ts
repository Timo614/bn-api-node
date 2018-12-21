import { ServerInterface } from "../interfaces/server/server.interface";
import { MockerInterface } from "../interfaces/mocks/mocker.interface";

import axios from "axios";
import { mergeDeep } from "../helpers/utils";
import { AuthTokenInterface } from "../interfaces/resources/auth-token.interface";
import Server from "./server";
const { version } = require("../../package.json");
const jwtDecode = require("jwt-decode");

export default class XhrClient {
	serverInterface: ServerInterface;

	server: Server;

	prefix: any;

	params: any = {};

	/**
	 * @deprecated
	 */
	token: string;

	authTokens?: AuthTokenInterface;

	authTokenExpires?: number;

	attemptReAuth: boolean = true;

	mocker: MockerInterface;

	agent: any;

	/**
	 *
	 * @param server
	 * @param clientParams Axios parameters
	 * @param mocker
	 */
	constructor(
		server: Server,
		clientParams: any = {},
		mocker?: MockerInterface
	) {
		this.server = server;
		this.serverInterface = server.serverInterface;
		this.params = mergeDeep(
			{
				baseURL: this.serverInterface.prefix,
				timeout: this.serverInterface.timeout,
				headers: {
					"Content-Type": "application/json",
					"X-API-Client-Version": `bn-api-node@${version}`
				},

			},
			clientParams
		);
		this.mocker = mocker;
	}

	private _getAgent(headers: any = {}) {
		headers = {
			...this.params.headers,
			...headers
		};
		let params = {
			...this.params,
			headers: {
				...headers
			}
		};

		return axios.create(params);
	}

	/**
	 * @deprecated
	 * @param token
	 */
	public setToken(token: string): void {
		this.setTokens({
			access_token: token,
			refresh_token: null
		});
	}

	public setTokens(tokens: AuthTokenInterface) {
		this.attemptReAuth = true;
		this.authTokens = tokens;
		this.token = tokens.access_token;
		let accessToken = jwtDecode(tokens.access_token) || {};
		this.authTokenExpires = accessToken.exp * 1000;
	}

	public isAuthed() {
		return (this.authTokens
			&& this.authTokens.access_token
			&& this.authTokenExpires > (new Date()).getTime());
	}

	public async getPublicAgent(headers: any = {}) {
		if (this.isAuthed()) {
			//Always attempt to send an authed one if there is a token
			return await this.getAuthAgent(headers);
		}

		return this._getAgent(headers);
	}

	public async getAuthAgent(headers: any = {}): Promise<any> {

		let auth: any = {};
		if (this.isAuthed()) {
			auth["Authorization"] = `Bearer ${this.authTokens.access_token}`;
		} else if (this.attemptReAuth && this.authTokens.refresh_token){
			this.attemptReAuth = false;
			let server: any = this.server;
			await server.auth.refresh({ refresh_token: this.authTokens.refresh_token });
			return await this.getAuthAgent(headers);
		}
		headers = {
			...headers,
			...auth,
		};
		return this._getAgent(headers);
	}
}
