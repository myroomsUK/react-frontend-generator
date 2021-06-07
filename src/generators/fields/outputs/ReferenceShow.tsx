import React from "react";
import {Link} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function ReferenceShow({model,value}:SingleSetInputFieldProps){
    console.log("propertyRecord", value)
    if(value){
        // @ts-ignore
        const id = (typeof value==="number") ? value : value["id"]
        // @ts-ignore
        const name = (typeof value==="number") ? value : value[model.optionText]
        return <Link color="secondary" href={`/${model.resourceName}/${id}/show`}>{name}</Link>
    }
    return <></>
}
