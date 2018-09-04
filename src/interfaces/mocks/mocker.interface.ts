export interface MockerInterface {
    mock(path: string): Promise<any>;
}