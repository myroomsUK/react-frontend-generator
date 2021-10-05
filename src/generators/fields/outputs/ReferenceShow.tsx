import React from "react";
import {Link} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function ReferenceShow({model,record}:SingleSetInputFieldProps){
    if(record){
        // @ts-ignore
        const id = (typeof record==="number") ? record : record["id"]
        // @ts-ignore
        const name = (typeof record==="number") ? record : record[model.optionText]
        return <Link color="secondary" href={`/${model.resourceName}/${id}/edit`}>{name}</Link>
    }
    return <></>
}
