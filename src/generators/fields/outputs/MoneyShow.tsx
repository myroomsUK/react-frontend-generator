import React from "react";
import {Typography} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function MoneyShow({record}:SingleSetInputFieldProps){
    const money = (record!==undefined) ? `£ ${record}`: "Amount not specified"
    return <Typography >{money}</Typography>
}