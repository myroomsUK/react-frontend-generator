import {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGetResourceModel} from "../resource-models/modelsRegistry";
import {useGetListing, useGetListingGroup} from "../redux/actions/verbs/get_listing";
import {getReferenceKeys, initializeReferenceFields} from "../generators/forms/formHelpers";
import {updateResourceListings} from "../redux/actions/app/actions";

export function useGetReferenceFieldsMap(resourceName, resource=null){
    const resourceFromRegistry = useGetResourceModel(resourceName)
    const {model} =  (resource) ? resource : resourceFromRegistry ;
    const {getListing} = useGetListing();
    const [trueResourceName, setTrueResourceName] = useState(resourceName);
//Looking for reference resources
    const initialReferenceMap = initializeReferenceFields(model); //map with all reference fields
    const [referencesMap, setReferencesMap] = useState(initialReferenceMap)
    const referenceItemsKeys = getReferenceKeys(model);


    useEffect(()=>{
        //console.log("resourceName has changed", resourceName);
        referenceItemsKeys.forEach(itemKey=> {
            getListing(model[itemKey].resourceName).then(result => setReferencesMap(new Map(initialReferenceMap.set(model[itemKey].resourceName, result))) );
        } );
    },[trueResourceName])

    return {referencesMap, setResourceName: setTrueResourceName};
}


export function GetListingsMap(model){
    const {getListingGroup} = useGetListingGroup();
    const initialReferenceMap = useMemo(()=>{return initializeReferenceFields(model)},[model]); //map with all reference fields
    const [referencesMap, setReferencesMap] = useState(initialReferenceMap);
    const resourceNames = useMemo(()=>{
        const referenceItemsKeys =  getReferenceKeys(model);
        return referenceItemsKeys.map(key => key.resourceName)
    },[model])

    const getListing = useCallback(()=>{
        if(resourceNames.length!==0){
            getListingGroup({resources:resourceNames}).then(result => {
                const newMap = new Map();
                Object.keys(result).forEach(key => newMap.set(key, result[key]));
                setReferencesMap((newMap))
            } );
        }
    },[resourceNames])

    useEffect(()=>{
       getListing();
    },[resourceNames])

    return {referencesMap, refreshReferencesMap: getListing};
}


export function UpdateListings(){

    const {resourceBuffer, listings} = useSelector(state=>state.appReducer);
    const dispatch = useDispatch();
    const {getListingGroup} = useGetListingGroup();

    const updateListings =useCallback(()=>{
        const resourceArray = Array.from(resourceBuffer);
        if(resourceArray.length!==0){
            getListingGroup({resources:resourceArray}).then(result => {
                const newMap = new Map();
                Object.keys(result).forEach(key => newMap.set(key, result[key]));
                dispatch(updateResourceListings(newMap));
            } );
        }
    },[resourceBuffer]);

    useEffect(()=>updateListings(),[resourceBuffer]);

    return {listings,updateListings};

}