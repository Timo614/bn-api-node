export interface MockerInterface {
    mock(path: string): Promise<any>;
	hasMock(path: string): boolean;
}