import { MockerAbstract } from "./abstracts/mocker.class";
import { MockDataInterface } from "../interfaces/mocks/mock-data.interface";

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
