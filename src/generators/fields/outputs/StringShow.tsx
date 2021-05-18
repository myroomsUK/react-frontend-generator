import React, {useState} from "react";

export default function StringShow({propertyRecord}:any){
    console.log("WHAAT", propertyRecord)
    const [local,setLocal] = useState(true)
    return <div>{propertyRecord}</div>
}