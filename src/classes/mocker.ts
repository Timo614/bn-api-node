import { MockerAbstract } from "./abstracts/mocker.class";
import { MockDataInterface } from "../interfaces/mocks/mock-data.interface";

/**
 * Create mock data for the server instance
 *
 * If there is a match for the key then the data provided will be returned
 * If there is no match then a query to the server will be triggered.
 *
 * ```
 * import Bigneon from 'bn-api-node';
 * const mocker = new Bigneon.Mocker({
 * 		//The endpoint you are providing data for
 *     events.index: {
 *     		//The data you are expecting back
 *         data: {
 *             data: [...EventInterface],
 *             paging: {...PagingInterface}
 *         },
 *         reject: false //This will throw an error with the data provided
 *     },
 *     venues.create: {
 *         data: {...VenueInterface},
 *         reject: false
 *     }
 * });
 * const server = new Bigneon.Server({prefix: "https://bigneon.test"}, {}, mocker);
 * server.events.index();//Will return the {data: [], paging: {}} result defined above
 *
 * ```
 */
export class Mocker extends MockerAbstract {
	mockData: { [path: string]: MockDataInterface } = {};

	constructor(mockData: { [path: string]: MockDataInterface } = {}) {
		super(mockData);
		this.mockData = mockData;
	}

	mock(path: string): Promise<any> {
		return new Promise((resolve, reject) => {
			if (this.hasMock(path)) {
				let mockData: MockDataInterface = this.mockData[path];
				if (mockData.reject) {
					return reject(mockData.data);
				}
				return resolve(mockData.data);
			}
			return reject(`Mock data does not exist for ${path}`);
		});
	}

	hasMock(path: string): boolean {
		return this.mockData.hasOwnProperty(path);
	}
}
export default Mocker;
