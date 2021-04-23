import { fetch } from '../dataAccess';
import {useDispatch} from "react-redux";

export function error(error) {
  return { type: 'DELETE_ERROR', error };
}

export function loading(loading) {
  return { type: 'DELETE_LOADING', loading };
}

export function success(deleted) {
  return { type: 'DELETE_SUCCESS', deleted };
}

export function useDelete(resourceName) {
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(loading(true));
    fetch(`/api/${resourceName}/${id}`, { method: 'DELETE' })
        .then(() => {
          dispatch(loading(false));
          dispatch(success(id));
        })
        .catch(e => {
          dispatch(loading(false));
          dispatch(error(e.message));
        });
  }

  return {remove};

}
