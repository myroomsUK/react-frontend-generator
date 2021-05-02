var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function useDelete(resourceName) {
    const dispatch = useDispatch();
    const remove = (id) => __awaiter(this, void 0, void 0, function* () {
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
    });
    return { remove };
}
