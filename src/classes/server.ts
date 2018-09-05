import {
    createServer,
    ServerInterface
} from "../interfaces/server/server.interface";
import XhrClient from "./xhr-client";

import Resources from '../resources/index';
import {RequestMethod} from "./request-method";
import {MockerInterface} from "../interfaces/mocks/mocker.interface";

export class Server {
    private serverInterface: ServerInterface;
    private client: any;

    constructor(options: any, headers: any = {}, mocker?: MockerInterface) {
        let self:any = this;
        this.serverInterface = createServer(options);
        this.client = new XhrClient(this.serverInterface, headers, mocker);

        for (let key in Resources) {
            let resourceData: any  = Resources[key];

            let resource:RequestMethod = new RequestMethod(resourceData, this.client);
            self[key] = resource;
        }
    }
}

export default Server;