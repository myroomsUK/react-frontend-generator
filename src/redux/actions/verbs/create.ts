import {SubmissionError} from 'redux-form';
import {fetch} from '../dataAccess';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {genericError} from "./edit";
import {FEEDBACK_MESSAGE} from "../app/actions";

export function loading(resource:string, loading:boolean) {
    return { type: 'CREATE_LOADING', resource:resource, loading:loading };
}

export function success(resource:string,created:boolean) {
    return { type: 'CREATE_SUCCESS', resource:resource, created: created };
}

export function genericSuccess() {
    return { type: FEEDBACK_MESSAGE, message:"Create Success", severity:"success"};
}


export function useCreate() {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const create = (resource:string,values:any) => {

        setErrors({});
        return fetch(`/api/${resource}`, { method: 'POST', body: JSON.stringify(values) })
            .then(response => {
                dispatch(loading(resource,false));
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
    return {data, create, errors};
}
