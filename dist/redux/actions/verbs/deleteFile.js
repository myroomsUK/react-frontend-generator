import { fetch } from '../dataAccess';
import { useDispatch } from "react-redux";
export function error(error) {
    return { type: 'DELETE_ERROR', error };
}
export function loading(loading) {
    return { type: 'DELETE_LOADING', loading };
}
export function success(deleted) {
    return { type: 'DELETE_SUCCESS', deleted };
}
export function useDeleteFile(resourceName) {
    const dispatch = useDispatch();
    const remove = (id, attribute, fileId) => {
        dispatch(loading(true));
        fetch(`/api/delete-file/${resourceName}/${id}/${attribute}/${fileId}`, { method: 'DELETE' })
            .then(() => {
            dispatch(loading(false));
            dispatch(success(id));
        })
            .catch(e => {
            dispatch(loading(false));
            dispatch(error(e.message));
        });
    };
    return { remove };
}
