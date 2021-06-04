import React from "react";
import {Typography} from "@material-ui/core";

export default function MoneyShow({propertyRecord}:any){
    const value = (propertyRecord!==undefined) ? `£ ${propertyRecord}`: "Amount not specified"
    return <Typography >{value}</Typography>
}