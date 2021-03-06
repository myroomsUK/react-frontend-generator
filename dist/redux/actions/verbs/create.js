var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SubmissionError } from 'redux-form';
import { fetch } from '../dataAccess';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { genericError } from "./edit";
import { FEEDBACK_MESSAGE } from "../app/actions";
export function loadingMessage(resource, loading) {
    return { type: 'CREATE_LOADING', resource: resource, loading: loading };
}
export function success(resource, created) {
    return { type: 'CREATE_SUCCESS', resource: resource, created: created };
}
export function genericSuccess() {
    return { type: FEEDBACK_MESSAGE, message: "Create Success", severity: "success" };
}
export function useCreate() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const create = (resource, values) => __awaiter(this, void 0, void 0, function* () {
        setErrors({});
        setLoading(true);
        return fetch(`/api/${resource}`, { method: 'POST', body: JSON.stringify(values) })
            .then(response => {
            dispatch(loadingMessage(resource, false));
            setLoading(false);
            return response.json();
        })
            .then(retrieved => {
            setData(retrieved);
            dispatch(genericSuccess());
            return retrieved;
        })
            .catch(e => {
            setLoading(false);
            if (e instanceof SubmissionError) {
                dispatch(genericError(e.message));
                setErrors(e.errors);
            }
            else {
                dispatch(genericError(e.message));
            }
            throw new Error(e.message);
        });
    });
    return { data, create, errors, loading };
}
