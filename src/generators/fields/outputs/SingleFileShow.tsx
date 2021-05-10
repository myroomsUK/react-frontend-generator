import React from "react";

export default function ({propertyRecord}:any){
    if(propertyRecord){
        return <a href={propertyRecord.url} target="_blank"> {propertyRecord.filename} </a>
    }
    return <div>No file</div>
}