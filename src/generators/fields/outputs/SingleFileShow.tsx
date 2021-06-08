import React from "react";

export default function ({record}:any){
    if(record){
        return <a href={record.url} target="_blank"> {record.filename} </a>
    }
    return <div>No file</div>
}