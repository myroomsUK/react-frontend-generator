export function error(state: null | undefined, action: any): {
    resource: any;
    error: any;
} | null;
export function loading(state: boolean | undefined, action: any): boolean | {
    resource: any;
    loading: any;
};
export function created(state: null | undefined, action: any): {
    resource: any;
    created: any;
} | null;
declare var _default: import("redux").Reducer<import("redux").CombinedState<{
    error: never;
    loading: never;
    created: never;
}>, any>;
export default _default;
