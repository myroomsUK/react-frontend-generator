import React, {useState} from "react";

export default function StringShow({propertyRecord}:any){
    const [local,setLocal] = useState(true)
    return <div>{propertyRecord}</div>
}