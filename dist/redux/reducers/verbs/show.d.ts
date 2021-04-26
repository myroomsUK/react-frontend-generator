export function error(state: any, action: any): any;
export function loading(state: boolean | undefined, action: any): any;
export function retrieved(state: any, action: any): any;
export function eventSource(state: any, action: any): any;
declare var _default: import("redux").Reducer<import("redux").CombinedState<{
    error: any;
    loading: any;
    retrieved: any;
    eventSource: any;
}>, any>;
export default _default;
