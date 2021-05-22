import React from "react";
import {Link} from "@material-ui/core";

export default function ReferenceShow({propertyModel,propertyRecord}:any){
    return propertyRecord ? <Link color="secondary" href={`/${propertyModel.resourceName}/${propertyRecord.get("id")}/show`}>{propertyRecord.get(propertyModel.optionText)}</Link> :<></>
}