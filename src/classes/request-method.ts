import {ResourceInterface} from "../interfaces/server/resource";
import {RequestMethodInterface} from "../interfaces/server/request-method.interface";
import SuperagentClient from "./superagent-client";

export class RequestMethod {

    path: string;
    client: SuperagentClient;

    constructor(resource: ResourceInterface, client: SuperagentClient) {
        let self: any = this;
        let path = '/' + resource.path + '/';
        this.path = path;
        this.client = client;
        for (let i in resource.methods) {
            let method: RequestMethodInterface = resource.methods[i];
            let name: string = method.name;
            let request: any = this._request(method);
            self[name] = request;
        }
    }

    _request(method: RequestMethodInterface): any {
        return (options: any = {
            headers: {},
            data: {}
        }) => {
            let path = `${this.path}/${method.path}`.replace(/\/\//g, '/');
            let client = method.requiresAuth ? this.client.getAuthAgent(options.headers) : this.client.getPublicAgent(options.headers);

            let promise;
            switch (method.method) {
                case 'POST':
                    promise = client.post(path).send(options.data);
                    break;
                case 'PUT':
                    promise = client.put(path).send(options.data);
                    break;
                case 'DELETE':
                    promise = client.delete(path).send(options.data);
                    break;
                case 'GET':
                    promise = client.get(path).send(options.data);
                    break;
            }
            if (promise) {
                return promise;
            } else {
                return Promise.reject('Invalid Method');
            }


        }
    }
}
