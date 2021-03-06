import fs from 'fs';
import {ResourceInterface} from "../interfaces/server/resource";
import {RequestMethodInterface} from "../interfaces/server/request-method.interface";
import SuperagentClient from "./superagent-client";

export class RequestMethod {

    path: string;
    client: SuperagentClient;

    constructor(resource: ResourceInterface, client: SuperagentClient) {
        let self: any = this;
        let path = '/' + resource.path;
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
        return (data: any = {}, headers: any = {}) => {
            let path = `${this.path}${method.path}`.replace(/\/\//g, '/');

            // If the path has an {id} parameter, replace it with the id
            if (path.match('{id}')) {
                if (!data.id) {
                    return Promise.reject(`${path} has an id field in its path, but no id was provided in the data object`)
                }
                path = path.replace('{id}', data.id);
                delete data.id;
            }


            if (method.beforeRequest) {
                method.beforeRequest(this.client, method, data, headers);
            }
            let client = method.requiresAuth ? this.client.getAuthAgent(headers) : this.client.getPublicAgent(headers);

            let promise;

            if (process.env.NODE_ENV !== 'production') {

                let mockPath = process.env.MOCK_DIR + '/' + method.method.toLowerCase()  + path.replace(/\//g, '.') + '.json';
                if (fs.existsSync(mockPath)) {
                    try {
                        let data = fs.readFileSync(mockPath,{encoding: 'utf8'});
                        promise = Promise.resolve({body: data});
                    }catch (e) {
                        console.log('Err', e);
                    }

                }
            }

            //If no promise has been set, because either we are in production or there was no mock data file do the request.
            if (!promise) {
                switch (method.method) {
                    case 'POST':
                        promise = client.post(path).send(data);
                        break;
                    case 'PUT':
                        promise = client.put(path).send(data);
                        break;
                    case 'DELETE':
                        promise = client.delete(path).send(data);
                        break;
                    case 'GET':
                        promise = client.get(path).query(data);
                        break;
                }

            }
            if (promise) {
                if (method.afterRequest) {
                    return promise.then((data:any = {}):Promise<any> => {
                        return method.afterRequest(this.client, data);
                    });
                }
                return promise;
            } else {
                return Promise.reject('Invalid Method');
            }


        }
    }
}
