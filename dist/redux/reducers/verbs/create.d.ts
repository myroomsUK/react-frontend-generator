export function error(state: any, action: any): any;
export function loading(state: boolean | undefined, action: any): boolean | {
    resource: any;
    loading: any;
};
export function created(state: any, action: any): any;
declare var _default: import("redux").Reducer<import("redux").CombinedState<{
    error: any;
    loading: never;
    created: any;
}>, any>;
export default _default;
