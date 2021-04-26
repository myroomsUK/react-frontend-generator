import {Resource} from "./Resource";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateRegistry} from "../redux/actions/app/actions";
import _ from 'lodash';


export function useGetResourceModel(resourceName:string): Resource{

    const state = useSelector(state=>state);
    // @ts-ignore
    return state.appReducer.registry.find(({resource, name}: any) => name === resourceName)?.resource;

}

export function useSetResourceModel(overrideRegistry:any, route ="/resources"){
    const [modelLoaded, setModelLoaded] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(route).then(response => response.json().then(retrieved => retrieved)).then(retrieved => {
            const registry = override(retrieved,overrideRegistry);
            const arrayRegistry = Object.keys(registry).map(resourceName => {return{name: resourceName, resource: new Resource(registry[resourceName]) } });
            dispatch(updateRegistry(arrayRegistry))
            setModelLoaded(true);
        })
    },[])
    return modelLoaded;
}

export function override(original:any, overrideElement:any){
    return _.merge(original,overrideElement)
}
