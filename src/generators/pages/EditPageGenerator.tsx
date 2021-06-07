import React from "react";
import {EditForm} from "./edit/EditFormGenerator";
import {useResource} from "../hooks/resourceUtils";
import {Record} from "../../resource-models/Record";

interface Props{
    propResourceName:string,
    propId:number,
    propEditPage?:any,
    isEdit?: boolean,

}

/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propEditPage custom page
 * @param isEdit
 * @constructor
 */
export const EditPage: React.FC<Props> = ({propResourceName:resourceName, propId, propEditPage, isEdit=true}) => {

    const {record, getNewResource} = useResource(resourceName, propId);
    return <EditForm isEdit={isEdit} propResourceName={resourceName} propId={propId} record={record} refresh={getNewResource} propEditPage={propEditPage}/>
}

