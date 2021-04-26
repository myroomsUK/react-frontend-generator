export function error(error: any): {
    type: string;
    error: any;
};
export function loading(loading: any): {
    type: string;
    loading: any;
};
export function success(deleted: any): {
    type: string;
    deleted: any;
};
export function useDeleteFile(resourceName: any): {
    remove: (id: any, attribute: any, fileId: any) => void;
};
