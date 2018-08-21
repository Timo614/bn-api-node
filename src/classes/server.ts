import {
    instanceOfServer,
    ServerInterface
} from "../interfaces/server/server.interface";
import SuperagentClient from "./superagent-client";

export class Server {
    private serverInterface: ServerInterface;
    private client: any;

    constructor(options: any, headers: any = {}) {
        this.serverInterface = instanceOfServer(options);
        this.client = new SuperagentClient(this.serverInterface, headers);
    }
}
