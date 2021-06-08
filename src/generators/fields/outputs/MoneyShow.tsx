import React from "react";
import {Typography} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function MoneyShow({record}:SingleSetInputFieldProps){
    // @ts-ignore
    const money = (record!==undefined) ? `£ ${parseInt(record)/100}`: "Amount not specified"
    return <Typography >{money}</Typography>
}