import React from "react";
import {Typography} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function MoneyShow({value}:SingleSetInputFieldProps){
    const money = (value!==undefined) ? `£ ${value}`: "Amount not specified"
    return <Typography >{money}</Typography>
}