import { ServerInterface } from "../interfaces/server/server.interface";
import { MockerInterface } from "../interfaces/mocks/mocker.interface";

import axios from "axios";
import { mergeDeep } from "../helpers/utils";
const { version } = require("../../package.json");

export default class XhrClient {
	server: ServerInterface;

	prefix: any;

	params: any = {};

	token: string;

	mocker: MockerInterface;

	agent: any;

	/**
	 *
	 * @param server
	 * @param clientParams Axios parameters
	 * @param mocker
	 */
	constructor(
		server: ServerInterface,
		clientParams: any = {},
		mocker?: MockerInterface
	) {
		this.server = server;
		this.params = mergeDeep(
			{
				baseURL: this.server.prefix,
				timeout: this.server.timeout,
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

	public setToken(token: string): void {
		this.token = token;
	}

	public getPublicAgent(headers: any = {}) {
		if (this.token) {
			//Always attempt to send an authed one if there is a token
			return this.getAuthAgent(headers);
		}
		return this._getAgent(headers);
	}

	public getAuthAgent(headers: any = {}) {
		headers = {
			...headers,
			Authorization: `Bearer ${this.token}`
		};
		return this._getAgent(headers);
	}
}
