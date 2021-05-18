import {useCallback, useEffect, useMemo, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import _ from "lodash";
import {replace} from "connected-react-router";
import {FilterList} from "./FilterList";
import {useGetResourceModel} from "../../resource-models/modelsRegistry";


export const useRouteFilters: (resourceNameToUse:string, presetFilters:any) => { components: any; filters: any; clearFilters: () => void } = (resourceNameToUse, presetFilters) => {
    const location = useLocation<any>();
    const [routeFilters, setRouteFilters] = useState<any>({});
    const [inheritedFilters, setInheritedFilters] = useState<any>({});
    const [filterObject, setFilterObject] = useState<any>({});
    const dispatch = useDispatch();

    const isEmbeddedTable = false;

    useEffect(()=>{setFilterObject({})},[resourceNameToUse])

    const getFiltersFromLocation = (location:any) => {
        const searchParams = new URLSearchParams(location.search);
        const routeFilters = {};
        // @ts-ignore
        for(let key:string of searchParams.keys()) {
            // @ts-ignore
            routeFilters[key] = searchParams.get(key);
        }
        return routeFilters;
    }

    useEffect(()=>{
        setInheritedFilters(presetFilters)},[presetFilters])

    useEffect(()=>{
        if(inheritedFilters){
            setFilterObject(inheritedFilters);
        }
    },[inheritedFilters])


    useEffect(()=>{
        const filtersFromLocation = getFiltersFromLocation(location);
        if(!_.isEqual(routeFilters, filtersFromLocation)){
            setRouteFilters(filtersFromLocation);
        }
    }, [location])

    useEffect(()=> {
        if(!isEmbeddedTable){
            if(!_.isEqual(routeFilters, filterObject)){
                setFilterObject(routeFilters);
            }
        }
    },[routeFilters])

    const checkIfFiltersEqualToRouteFilters = useCallback(()=>{
        return _.isEqual(filterObject, routeFilters)
    },[filterObject,routeFilters])

    useEffect(()=> {
        if(!isEmbeddedTable){
            if(!checkIfFiltersEqualToRouteFilters()){
                let route = location.pathname+"?";
                Object.keys(filterObject).forEach((key,index)=> {
                    if(index===0){
                        route = route.concat(`${key}=${filterObject[key]}`);
                    }else{
                        route = route.concat(`&${key}=${filterObject[key]}`);
                    }

                })
                dispatch(replace(route));
            }
        }

    },[filterObject])


    const clearFilters = ()=>setFilterObject({});
    const {model, filters:modelFilters} = useGetResourceModel(resourceNameToUse);

    const modelFi = getFinalFilters(modelFilters, {})
    const propsFiltersList = useMemo(()=> {return {model:model, modelFilters: modelFi, filters: filterObject, setFilters: setFilterObject}},[model, modelFilters, filterObject]);
    const filterComponents = FilterList(propsFiltersList);
    return {filters:filterObject, components:filterComponents, clearFilters:clearFilters}

}

export const useTableFilters: (resourceName:string, propLockedFilters:any) => { components: any; filters: any; clearFilters: () => void } = (resourceName, propLockedFilters) => {
    const [filters, setFilters] = useState<any>(propLockedFilters);
    const {model, filters:modelFilters} = useGetResourceModel(resourceName);
    const clearFilters = ()=>setFilters(propLockedFilters);
    const modelFi = getFinalFilters(modelFilters, propLockedFilters);
    const propsFiltersList = useMemo(()=> {return {model:model, modelFilters:modelFi , filters: filters, setFilters: setFilters}},[model, modelFilters, filters, propLockedFilters]);
    const filterComponents = FilterList(propsFiltersList);
    return {filters:filters, components:filterComponents, clearFilters:clearFilters}
}

function removeLockedFiltersFromModelFilters(filters:any, lockedFilters:any ){
    Object.keys(lockedFilters).forEach(key => delete filters[key]);
    return filters;
}

function getFiltersAsKeyType(filters:any){

    let finalFilters = {};
    if(filters){
        Object.keys(filters).forEach(filterType => {
            const filterKeys = filters[filterType];
            filterKeys.forEach((filterKey:any) => {
                // @ts-ignore
                finalFilters[filterKey] = filterType;
            } );
        } )
    }
    return finalFilters;
}

function getFinalFilters(filters:any, lockedFilters:any ){
    const reorderedFilters = getFiltersAsKeyType(filters);
    return removeLockedFiltersFromModelFilters(reorderedFilters, lockedFilters);
}