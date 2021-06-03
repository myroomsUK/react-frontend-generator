import {showDate} from "../../../utils/timeUtils";
import React from "react";

export default function DateShow({propertyRecord}:any){
    return propertyRecord ? <div>{showDate(propertyRecord)}</div> : <div>No date specified</div>;
}