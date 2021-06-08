import {showDate} from "../../../utils/timeUtils";
import React from "react";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function DateShow({record}:SingleSetInputFieldProps){
    return record ? <div>{showDate(record)}</div> : <div>No date specified</div>;
}