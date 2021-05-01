import React, {useCallback, useEffect, useRef, useState} from "react";
import {useGetOne} from "../../redux/actions/verbs/get_one";
import {EditForm} from "./edit/EditFormGenerator";

interface Props{
    propResourceName:string,
    propId:number,
    propEditPage?:any,

}

export const EditPage: React.FC<Props> = ({propResourceName:resourceName, propId, propEditPage}) => {

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

    return <EditForm propResourceName={resourceName} propId={propId} record={record} propEditPage={propEditPage}/>
}
