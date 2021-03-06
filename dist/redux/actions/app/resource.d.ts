export const CHANGE_RESOURCE: "CHANGE_RESOURCE";
export const CHANGE_RESOURCE_BUFFER: "CHANGE_RESOURCE_BUFFER";
export const RESET_RESOURCE_BUFFER: "RESET_RESOURCE_BUFFER";
export const UPDATE_RESOURCE_LISTINGS: "UPDATE_RESOURCE_LISTINGS";
export function changeResource(resource: any): {
    type: string;
    resource: any;
};
export function changeResourceBuffer(resource: any): {
    type: string;
    resource: any;
};
export function resetResourceBuffer(): {
    type: string;
};
export function updateResourceListings(listings: any): {
    type: string;
    listingsMap: any;
};
