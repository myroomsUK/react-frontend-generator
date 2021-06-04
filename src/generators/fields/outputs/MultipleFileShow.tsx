import ShowFileList from "../ShowFileList";
import React from "react";
import {Record} from "../../../resource-models/Record";

interface MultipleFileShowProps{
    record: Map<number, any>
}

export default function ({record}:MultipleFileShowProps){
    return <ShowFileList filesList={Array.from(record.values())} />
}