import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import {Link} from "@material-ui/core";

export default function ReferenceShow({model,propertyRecord}:any){
    return <Link color="secondary" href={`/${model.resourceName}/${propertyRecord.id}/show`}>{propertyRecord[model.optionText]}</Link>
}