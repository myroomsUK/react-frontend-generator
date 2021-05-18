import ShowFileList from "../ShowFileList";
import React from "react";

export default function ({propertyRecord}:any){
    console.log("propertyRecord", propertyRecord);
    return <ShowFileList filesList={propertyRecord} />
}