import React from "react";
import {Link} from "@material-ui/core";
import {ReferenceModel} from "../../../resource-models/propertyModels/ReferenceModel";

export default function ReferenceShow({propertyModel,propertyRecord}:ReferenceOutput){
    console.log("propertyRecord", propertyRecord)
    if(propertyRecord){
        // @ts-ignore
        const id = (typeof propertyRecord==="number") ? propertyRecord : propertyRecord["id"]
        // @ts-ignore
        const name = (typeof propertyRecord==="number") ? propertyRecord : propertyRecord[propertyModel.optionText]
        return <Link color="secondary" href={`/${propertyModel.resourceName}/${id}/show`}>{name}</Link>
    }
    return <></>
}

interface ReferenceOutput{
    propertyModel:ReferenceModel,
    propertyRecord: Map<string, any>|number
}