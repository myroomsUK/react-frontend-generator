export function useGetReferenceFieldsMap(resourceName: any, resource?: any): {
    referencesMap: Map<any, any>;
    setResourceName: import("react").Dispatch<any>;
};
export function GetListingsMap(model: any): {
    referencesMap: Map<any, any>;
    refreshReferencesMap: () => void;
};
export function UpdateListings(): {
    listings: any;
    updateListings: () => void;
};
