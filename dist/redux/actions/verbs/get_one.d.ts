export function error(error: any): {
    type: string;
    error: any;
};
export function loading(loading: any): {
    type: string;
    loading: any;
};
export function success(retrieved: any): {
    type: string;
    retrieved: any;
};
export function useGetOne(): {
    data: undefined;
    getOne: (resourceName: any, id: any) => Promise<void>;
};
