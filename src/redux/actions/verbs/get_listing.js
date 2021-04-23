import {
    fetch
} from '../dataAccess';
import {useState} from "react";
import {useDispatch} from "react-redux";

export function error(error) {
    return { type: 'GET_LISTING_ERROR', error };
}

export function loading(loading) {
    return { type: 'GET_LISTING_LOADING', loading };
}

export function success(retrieved) {
    return { type: 'GET_LISTING_SUCCESS', retrieved };
}

export function useGetListing() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getListing = async (resource) => fetch(`/api/resources/listing/${resource}`)
        .then(response =>
            response
                .json()
                .then(retrieved => ({ retrieved }))
        )
        .then(({ retrieved, hubURL }) => {

            dispatch(loading(false));
            dispatch(success(retrieved));
            setData(retrieved);
            return retrieved;
        })
        .catch(e => {
            dispatch(loading(false));
            dispatch(error(e.message));
        });


    return {data, getListing};
}


export function useGetListingGroup() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getListingGroup = async (resources) => fetch(`/api/resources/listings`, { method: 'POST', body: JSON.stringify(resources) })
        .then(response =>
            response
                .json()
                .then(retrieved => ({ retrieved }))
        )
        .then(({ retrieved, hubURL }) => {

            dispatch(loading(false));
            dispatch(success(retrieved));
            setData(retrieved);
            return retrieved;
        })
        .catch(e => {
            dispatch(loading(false));
            dispatch(error(e.message));
        });


    return {data, getListingGroup};
}

