export function error(resource: any, error: any): {
    type: string;
    resource: any;
    error: any;
};
export function genericError(message: any): {
    type: string;
    message: any;
    severity: string;
};
export function genericSuccess(): {
    type: string;
    message: string;
    severity: string;
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
export function useEdit(): {
    data: never[];
    edit: (resource: any, id: any, values: any) => Promise<any>;
    errors: {};
};
export function reset(resource: any): (dispatch: any) => void;
