export interface EventInterestInterface {
    id?: string;
    event_id: string;
    user_id: string;
}

export const createEventInterest = (base: any = {}) :EventInterestInterface => {
    return {
        ...{
            id: "",
            event_id: "",
            user_id: ""
        },
        ...base
    } as EventInterestInterface;
};