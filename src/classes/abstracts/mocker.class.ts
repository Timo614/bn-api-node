import { MockerInterface } from "../../interfaces/mocks/mocker.interface";

export abstract class MockerAbstract implements MockerInterface {
	constructor(options:any = {}) {

	}

    abstract mock(path: string): Promise<any>;

    abstract hasMock(path:string): boolean;
}
