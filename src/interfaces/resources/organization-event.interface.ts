export interface OrganizationVenueInterface {
    id?: string;
    organization_id: string;
    venue_id: string;
}

export const createOrganizationVenue = (base: any = {}): OrganizationVenueInterface => {
    return {
        ...{
            id: "",
            organization_id: "",
            venue_id: ""
        },
        ...base

    }as OrganizationVenueInterface;
};