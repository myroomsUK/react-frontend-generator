export const CHANGE_RESOURCE = "CHANGE_RESOURCE";
export const CHANGE_RESOURCE_BUFFER = "CHANGE_RESOURCE_BUFFER";
export const RESET_RESOURCE_BUFFER = "RESET_RESOURCE_BUFFER";
export const UPDATE_RESOURCE_LISTINGS = "UPDATE_RESOURCE_LISTINGS";
export const changeResource = (resource) => {
    return {
        type: CHANGE_RESOURCE,
        resource: resource
    };
};
export const changeResourceBuffer = (resource) => {
    return {
        type: CHANGE_RESOURCE_BUFFER,
        resource: resource
    };
};
export const resetResourceBuffer = () => {
    return {
        type: RESET_RESOURCE_BUFFER,
    };
};
export const updateResourceListings = (listings) => {
    return {
        type: UPDATE_RESOURCE_LISTINGS,
        listingsMap: listings
    };
};
