import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

export default function Booleanshow({propertyRecord}:any){
    return (propertyRecord) ? <CheckIcon/> : <CloseIcon/>
}