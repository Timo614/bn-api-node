import { Server } from "../src/classes/server";
import SuperagentClient from "../src/classes/superagent-client";
import {ServerInterface} from "../src/interfaces/server/server.interface";

const server: ServerInterface = {
    protocol: 'http',
    host: 'localhost',
    port: 9000,
    basePath: '/',
    apiVersion: 1,
    prefix: ''
};


const client = new SuperagentClient(server, []);

const agent = client.getPublicAgent();

