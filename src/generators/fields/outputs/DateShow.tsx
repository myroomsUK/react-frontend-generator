import {showDate} from "../../../utils/timeUtils";
import React from "react";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function DateShow({value}:SingleSetInputFieldProps){
    return value ? <div>{showDate(value)}</div> : <div>No date specified</div>;
}