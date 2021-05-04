import {
  ldfetch
} from '../dataAccess';
import { success as deleteSuccess } from './delete';
import {useState} from "react";
import {useDispatch} from "react-redux";

export function error(resource,error) {
  return { type: 'LIST_ERROR', error:error, resource:resource };
}

export function loading(resource,loading) {
  return { type: 'LIST_LOADING', loading:loading, resource:resource };
}

export function success(resource,retrieved) {
  return { type: 'LIST_SUCCESS', retrieved:retrieved, resource:resource };
}

export function useList() {
  const [data, setData] = useState({list:[], totalItems: 0});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const get = (resource,page, filters=[]) => {
    let route = `/api/${resource}?`;

      Object.keys(filters).forEach((key,index)=> {
        if(index===0){
          route = route.concat(`${key}=${filters[key]}`);
        }else{
          route = route.concat(`&${key}=${filters[key]}`);
        }

      })
    //add page
    if(filters.length===0){
      route = route.concat(`page=${page}`)
    }else{
      route = route.concat(`&page=${page}`)
    }
      setLoading(true);
      return ldfetch(route)
          .then(response => response.json())
          .then(retrieved =>{return ({data: retrieved["hydra:member"], totalItems: retrieved["hydra:totalItems"]})})
          .then(({ data, totalItems }) => {
            setData({list:data, totalItems:totalItems});
            setLoading(false);
            return {data, totalItems}
          })
          .catch(e => {
            dispatch(loading(resource,false));
            dispatch(error(resource,e.message));
            setLoading(false);
          })
  };


  return {data, get, loading};
}

export function reset(eventSource) {
  return dispatch => {
    if (eventSource) eventSource.close();

    dispatch({ type: 'LIST_RESET' });
    dispatch(deleteSuccess(null));
  };
}
