import {getThemeByName} from "../../../rendering/themes/themes";

export const CHANGE_RESOURCE = "CHANGE_RESOURCE";
export const CHANGE_RESOURCE_BUFFER = "CHANGE_RESOURCE_BUFFER";
export const SWITCH_THEME = "SWITCH_THEME";
export const FEEDBACK_MESSAGE = "FEEDBACK_MESSAGE";
export const RESET_RESOURCE_BUFFER = "RESET_RESOURCE_BUFFER";
export const UPDATE_RESOURCE_LISTINGS = "UPDATE_RESOURCE_LISTINGS";

export const changeResource = (resource) =>{
    return {
        type: CHANGE_RESOURCE,
        resource: resource
    }
}

export const switchTheme = (themeName) => {
    const newTheme = getThemeByName(themeName);
    return {
        type: SWITCH_THEME,
        theme: newTheme
    }
}
export const switchThemeBool = () => {
    const newTheme = getThemeByName();
    return {
        type: SWITCH_THEME,
        theme: newTheme
    }
}

export const changeResourceBuffer = (resource) => {
    return {
        type: CHANGE_RESOURCE_BUFFER,
        resource: resource
    }
}

export const resetResourceBuffer = () => {
    return {
        type: RESET_RESOURCE_BUFFER,
    }
}

export const updateResourceListings = (listings) => {
    return {
        type: UPDATE_RESOURCE_LISTINGS,
        listingsMap: listings
    }
}