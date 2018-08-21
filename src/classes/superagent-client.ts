import {ServerInterface} from "../interfaces/server/server.interface";
// @ts-ignore
import superagent from "superagent";
// @ts-ignore
import superagentPrefix from "superagent-prefix";
// @ts-ignore
import superagentJsonapify from "superagent-jsonapify";

superagentJsonapify(superagent);

export default class SuperagentClient {
    prefix: any;
    superagent: any;
    agent: any;

    constructor(server: ServerInterface, headers: any = {
        'Content-Type': 'application/json'
    }) {
        this.prefix = superagentPrefix(server.prefix);
        this.superagent = superagent;
        //These are default headers
        for (let key in headers) {
            this.superagent.set(key, headers[key]);
        }
    }

    private _getAgent(headers: any = {}) {
        let agent = this.superagent.agent().use(this.prefix);
        for (let key in headers) {
            agent.set(key, headers[key]);
        }
        return agent;
    }

    public getPublicAgent(headers: any = {}) {
        return this._getAgent(headers);
    }

    public getAuthAgent(token: string, headers: any = {}) {
        let agent = this._getAgent(headers);
        agent.set("Authorization", `Bearer ${token}`);
        return agent;
    }
}
