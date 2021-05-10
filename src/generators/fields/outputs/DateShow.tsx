import {showDate} from "../../../utils/timeUtils";
import React from "react";

export default function DateShow({propertyRecord}:any){
    return <div>{showDate(propertyRecord)}</div>;
}