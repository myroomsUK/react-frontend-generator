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
export function retrieve(id: any): (dispatch: any) => Promise<void>;
