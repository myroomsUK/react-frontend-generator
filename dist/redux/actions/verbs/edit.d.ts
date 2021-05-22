export declare function genericError(message: string): {
    type: string;
    message: string;
    severity: string;
};
export declare function genericSuccess(): {
    type: string;
    message: string;
    severity: string;
};
export declare function loading(resource: string, loading: boolean): {
    type: string;
    resource: string;
    loading: boolean;
};
export declare function success(resource: string, created: boolean): {
    type: string;
    resource: string;
    created: boolean;
};
export declare function useEdit(): {
    data: never[];
    edit: (resource: string, id: number, values: any) => Promise<any>;
    errors: {};
};
