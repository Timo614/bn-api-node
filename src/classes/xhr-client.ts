import {ServerInterface} from "../interfaces/server/server.interface";
import {MockerInterface} from "../interfaces/mocks/mocker.interface";

import axios from 'axios';

export default class XhrClient {
    server: ServerInterface;
    prefix: any;

    headers: any = {};

    token: string;
    mocker: MockerInterface;

    agent: any;

    constructor(server: ServerInterface, headers: any = {}, mocker?: MockerInterface) {
        this.server = server;
        this.headers = {
            ...{'Content-Type': 'application/json'},
            ...headers
        };
        this.mocker = mocker;



    }

    private _getAgent(headers: any = {}) {
        let agent = axios.create({
            baseURL: this.server.prefix,
            timeout: this.server.timeout,
            headers: {
                ...this.headers,
                ...headers
            },
        });


        return agent;
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
            'Authorization': `Bearer ${this.token}`
        };
        return this._getAgent(headers);
    }
}
