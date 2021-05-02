import {useCallback, useEffect, useRef, useState} from "react";
import {useGetOne} from "../../redux/actions/verbs/get_one";
import {useList} from "../../redux/actions/verbs/list";

export function useResource(resourceName:string, propId:number){
    const initialValue = useRef({});
    const [record, setRecord] = useState(initialValue.current);
    const {data:downloadedRecord, getOne} = useGetOne();
    const getNewResource = useCallback(()=>getOne(resourceName,propId),[resourceName,propId]);
    useEffect(()=> getNewResource(),[])

    useEffect(()=>{
        if(downloadedRecord!==undefined){
            // @ts-ignore
            setRecord(downloadedRecord)
        }
    },[downloadedRecord])
    return {record, setRecord};
}

export function useResources(resourceName:string){
    const initialValue = useRef({});
    const [record, setRecord] = useState(initialValue.current);
    const {data:downloadedRecord, get} = useList();
    const getNewResource = useCallback(()=>get(resourceName),[resourceName,]);
    useEffect(()=> getNewResource(),[])

    useEffect(()=>{
        if(downloadedRecord!==undefined){
            // @ts-ignore
            setRecord(downloadedRecord)
        }
    },[downloadedRecord])
    return {record, setRecord};
}