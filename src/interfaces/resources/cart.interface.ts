export interface CartInterface {
    id?: string;
    user_id: string;
    created_at?: Date;
}

export const createCart = (base: any = {}): CartInterface => {
    return {
        ...{
            id: "",
            user_id: "",
            created_at: ""
        },
        ...base
    } as CartInterface;
};
