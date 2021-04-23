import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import _ from "lodash";
import {replace} from "connected-react-router";
import {FilterList} from "./FilterList";
import {getResourceModel} from "../../resource-models/modelsRegistry";



interface RouteParams{
    urlResourceName:string
}

export const TableFilters: (resourceNameToUse:string, presetFilters:any) => { components: any; filters: any; clearFilters: () => void } = (resourceNameToUse, presetFilters) => {
        const {urlResourceName} = useParams<RouteParams>();
        const location = useLocation<any>();
        const [routeFilters, setRouteFilters] = useState<any>({});
        const [inheritedFilters, setInheritedFilters] = useState<any>({});
        const [filterObject, setFilterObject] = useState<any>({});
        const dispatch = useDispatch();

        const isEmbeddedTable = resourceNameToUse!==urlResourceName;

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
        const {model, filters:modelFilters} = useMemo(()=> getResourceModel(resourceNameToUse),[resourceNameToUse]);
        const propsFiltersList = useMemo(()=> {return {model:model, modelFilters: modelFilters, filters: filterObject, setFilters: setFilterObject}},[model, modelFilters, filterObject]);
        return {filters:filterObject, components:FilterList(propsFiltersList), clearFilters:clearFilters}

}