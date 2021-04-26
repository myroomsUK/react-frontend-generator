export function error(error) {
    return { type: 'SHOW_ERROR', error };
}
export function loading(loading) {
    return { type: 'SHOW_LOADING', loading };
}
export function success(retrieved) {
    return { type: 'SHOW_SUCCESS', retrieved };
}
export function retrieve(id) {
    return dispatch => {
        dispatch(loading(true));
        return fetch(id)
            .then(response => response
            .json()
            .then(retrieved => ({ retrieved })))
            .then(({ retrieved }) => {
            dispatch(loading(false));
            dispatch(success(retrieved));
        })
            .catch(e => {
            dispatch(loading(false));
            dispatch(error(e.message));
        });
    };
}
