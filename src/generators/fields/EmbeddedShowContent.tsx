import React from "react";
import {Model} from "../../resource-models/Model";
import {ShowContent} from "./ShowContent";
import {EmbeddedSinglePropertyRecord} from "../../resource-models/PropertyRecord";

interface EmbeddedShowContentProps{
    model:Model,
    record: EmbeddedSinglePropertyRecord,
    showElement?: React.DetailedReactHTMLElement<any, any>;
}
export const EmbeddedShowContent: React.FC<EmbeddedShowContentProps> = ({model, record, showElement}) => {
    return <ShowContent model={model} record={record.value} showElement={showElement}/>
}