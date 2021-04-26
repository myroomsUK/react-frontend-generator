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
export function useDelete(resourceName: any): {
    remove: (id: any) => void;
};
