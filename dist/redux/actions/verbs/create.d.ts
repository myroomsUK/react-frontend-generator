export function error(resource: any, error: any): {
    type: string;
    resource: any;
    error: any;
};
export function loading(resource: any, loading: any): {
    type: string;
    resource: any;
    loading: any;
};
export function success(resource: any, created: any): {
    type: string;
    resource: any;
    created: any;
};
export function genericSuccess(): {
    type: string;
    message: string;
    severity: string;
};
export function useCreate(): {
    data: never[];
    create: (resource: any, values: any) => Promise<any>;
    errors: {};
};
