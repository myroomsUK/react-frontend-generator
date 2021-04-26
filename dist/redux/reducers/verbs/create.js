import { combineReducers } from 'redux';
export function error(state = null, action) {
    switch (action.type) {
        case 'CREATE_ERROR':
            return {
                resource: action.resource,
                error: action.error
            };
        default:
            return state;
    }
}
export function loading(state = false, action) {
    switch (action.type) {
        case 'CREATE_LOADING':
            return {
                resource: action.resource,
                loading: action.loading
            };
        default:
            return state;
    }
}
export function created(state = null, action) {
    switch (action.type) {
        case 'CREATE_SUCCESS':
            return {
                resource: action.resource,
                created: action.created
            };
        default:
            return state;
    }
}
export default combineReducers({ error, loading, created });
