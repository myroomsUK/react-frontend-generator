import React from "react";
import {useResource} from "../hooks/resourceUtils";
import {Show} from "./show/Show";

interface Props{
    propResourceName:string,
    propId:number,
    propShowPage?:any,

}

/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propShowPage custom page
 * @constructor
 */
export const ShowPage: React.FC<Props> = ({propResourceName, propId, propShowPage}) => {

    const {record} = useResource(propResourceName, propId);
    return <Show propResourceName={propResourceName} propId={propId} record={record} propShowPage={propShowPage} />
}

