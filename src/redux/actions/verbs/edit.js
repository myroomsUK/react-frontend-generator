import { SubmissionError } from 'redux-form';
import { fetch } from '../dataAccess';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {FEEDBACK_MESSAGE} from "../app/actions";

export function error(resource, error) {
    return { type: 'PATCH_ERROR', resource:resource, error:error };
}

export function genericError(message) {
    return { type: FEEDBACK_MESSAGE, message:message, severity:"error"};
}

export function genericSuccess() {
    return { type: FEEDBACK_MESSAGE, message:"Edit Success", severity:"success"};
}

export function loading(resource, loading) {
    return { type: 'PATCH_LOADING', resource:resource, loading:loading };
}

export function success(resource,created) {
    return { type: 'PATCH_SUCCESS', resource:resource, created: created };
}

export function useEdit() {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const edit = async (resource,id,values) => {
        setErrors({});
        return fetch(`/api/${resource}/${id}`, { method: 'PATCH', body: JSON.stringify(values) })
            .then(response => {
                dispatch(loading(false));

                return response.json();
            })
            .then(retrieved => {
                setData(retrieved);
                dispatch(genericSuccess())
                return retrieved;
            })
            .catch(e => {

                if(e instanceof SubmissionError){
                    dispatch(genericError(e.message))
                    setErrors(e.errors);

                }else{
                    dispatch(genericError(e.message))
                }
                throw new Error(e.message);
            });
    }
    return {data, edit, errors};
}

export function reset(resource) {
    return dispatch => {
        dispatch(loading(resource,false));
        dispatch(error(resource,null));
    };
}
