import {showDate} from "../../../utils/timeUtils";
import React from "react";

export default function DateShow({propertyRecord}:any){
    console.log("date record", propertyRecord)
    return <div>{showDate(propertyRecord)}</div>;
}