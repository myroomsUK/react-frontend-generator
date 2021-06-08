import {showDate} from "../../../utils/timeUtils";
import React from "react";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";
import {Typography} from "@material-ui/core";

export default function DateShow({record}:SingleSetInputFieldProps){
    return record ? <Typography>{showDate(record)}</Typography> : <Typography>No date specified</Typography>;
}