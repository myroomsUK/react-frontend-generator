import React from "react";
import {Model} from "../../resource-models/Model";
import {ShowContent} from "./ShowContent";
import {Record} from "../../resource-models/Record";

interface EmbeddedShowContentProps{
    model:Model,
    record: Record,
    showElement?: React.DetailedReactHTMLElement<any, any>;
}
export const EmbeddedShowContent: React.FC<EmbeddedShowContentProps> = ({model, record, showElement}) => {
    return <ShowContent model={model} record={record} showElement={showElement}/>
}