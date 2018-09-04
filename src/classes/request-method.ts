// import fs from 'fs';
import {ResourceInterface} from "../interfaces/server/resource";
import {RequestMethodInterface} from "../interfaces/server/request-method.interface";
import XhrClient from "./xhr-client";

export class RequestMethod {

    path: string;
    client: XhrClient;

    constructor(resource: ResourceInterface, client: XhrClient) {
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

    _replacePathVariables(path: string, data: any = {}, removeDataAfterReplace: boolean = true): string {
        let regex = /{([a-zA-Z0-9_-]+)}/g;
        let newPath = path;
        let matches;
        do {
            matches = regex.exec(newPath);
            if (matches) {
                let dataKey = matches[1];
                if (data.hasOwnProperty(dataKey)) {
                    let dataValue = data[dataKey];
                    newPath = newPath.replace(matches[0], dataValue);
                    if (removeDataAfterReplace) {
                        delete data[dataKey];
                    }
                } else {
                    throw (`${path} is expecting ${dataKey} but it has not been provided in the data object`);
                }
            }

        } while (matches);
        return newPath;
    }

    _request(method: RequestMethodInterface): any {
        return (data: any = {}, headers: any = {}) => {
            let path = `${this.path}${method.path}`.replace(/\/\//g, '/');
            // If the path has any {identifier} parameter, replace it with the data[identifier] key

            try {
                path = this._replacePathVariables(path, data);
            } catch (e) {
                return Promise.reject(e);
            }

            if (method.beforeRequest) {
                method.beforeRequest(this.client, method, data, headers);
            }
            let axiosInstance = method.requiresAuth ? this.client.getAuthAgent(headers) : this.client.getPublicAgent(headers);

            let promise;

            if (this.client.mocker) {
                promise = this.client.mocker.mock(method.method.toLowerCase() + path.replace(/\//g, '.'));
            }

            //If no promise has been set, because either we are in production or there was no mock data file do the request.
            if (!promise) {
                switch (method.method) {
                    case 'POST':
                        promise = axiosInstance.post(path, data);
                        break;
                    case 'PUT':
                        promise = axiosInstance.put(path, data);
                        break;
                    case 'DELETE':
                        promise = axiosInstance.delete(path, {params: data});
                        break;
                    case 'GET':
                        promise = axiosInstance.get(path, {params: data});
                        break;
                }

            }
            if (promise) {
                if (method.afterRequest) {
                    return promise.then((data: any = {}): Promise<any> => {
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
