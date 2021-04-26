export function error(resource: any, error: any): {
    type: string;
    error: any;
    resource: any;
};
export function loading(resource: any, loading: any): {
    type: string;
    loading: any;
    resource: any;
};
export function success(resource: any, retrieved: any): {
    type: string;
    retrieved: any;
    resource: any;
};
export function useList(): {
    data: {
        list: never[];
        totalItems: number;
    };
    get: (resource: any, page: any, filters?: any[]) => void;
    loading: boolean;
};
export function reset(eventSource: any): (dispatch: any) => void;
