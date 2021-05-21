import React from "react";
import {EditForm} from "./edit/EditFormGenerator";
import {useResource} from "../hooks/resourceUtils";
import {Record} from "../../resource-models/Record";

interface Props{
    propResourceName:string,
    propId:number,
    propEditPage?:any,

}

/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propEditPage custom page
 * @constructor
 */
export const EditPage: React.FC<Props> = ({propResourceName:resourceName, propId, propEditPage}) => {

    const {record:recordJson} = useResource(resourceName, propId);
    const record = Record.createFromJson(recordJson);

    return <EditForm propResourceName={resourceName} propId={propId} record={record} propEditPage={propEditPage}/>
}

