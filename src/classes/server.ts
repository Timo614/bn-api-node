import {
    instanceOfServer,
    ServerInterface
} from "../interfaces/server/server.interface";
import SuperagentClient from "./superagent-client";

import Resources from '../resources/index';
import {RequestMethod} from "./request-method";

export class Server {
    private serverInterface: ServerInterface;
    private client: any;

    constructor(options: any, headers: any = {}) {
        let self:any = this;
        this.serverInterface = instanceOfServer(options);
        this.client = new SuperagentClient(this.serverInterface, headers);

        for (let key in Resources) {
            let resourceData: any  = Resources[key];

            let resource:RequestMethod = new RequestMethod(resourceData, this.client);
            self[key] = resource;
        }
    }
}
