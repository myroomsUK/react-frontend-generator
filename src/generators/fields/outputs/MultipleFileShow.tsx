import ShowFileList from "../ShowFileList";
import React from "react";
import {Record} from "../../../resource-models/Record";

interface MultipleFileShowProps{
    propertyRecord: Map<number, any>
}

export default function ({propertyRecord}:MultipleFileShowProps){
    return <ShowFileList filesList={Array.from(propertyRecord.values())} />
}