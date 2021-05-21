import ShowFileList from "../ShowFileList";
import React from "react";
import {Record} from "../../../resource-models/Record";

interface MultipleFileShowProps{
    propertyRecord: Record[]
}

export default function ({propertyRecord}:MultipleFileShowProps){

    return <ShowFileList filesList={propertyRecord} />
}