import React from "react";
import {EditForm} from "./edit/EditFormGenerator";
import {useResource} from "../hooks/resourceUtils";

interface Props{
    propResourceName:string,
    propId:number,
    propEditPage?:any,

}

export const EditPage: React.FC<Props> = ({propResourceName:resourceName, propId, propEditPage}) => {

    const {record} = useResource(resourceName, propId);

    return <EditForm propResourceName={resourceName} propId={propId} record={record} propEditPage={propEditPage}/>
}

