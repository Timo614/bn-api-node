export interface RequestMethodInterface{
    name: string,
    method: string,
    path: string,
    required?: string[],
    requiresAuth: boolean,
    encode: any
}

export const instanceOfRequestMethod = (base: any = {}) :RequestMethodInterface  => {
    return {
        ...{
            method: 'GET',
            path: '',
            name: '',
            required: [],
            requiresAuth: true,
            encode: (data: any) => data,
        },
        ...base
    } as RequestMethodInterface;
};
