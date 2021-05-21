import React from "react";
import { Model } from "../../resource-models/Model";
import { EmbeddedSinglePropertyRecord } from "../../resource-models/PropertyRecord";
interface EmbeddedShowContentProps {
    model: Model;
    record: EmbeddedSinglePropertyRecord;
    showElement?: React.DetailedReactHTMLElement<any, any>;
}
export declare const EmbeddedShowContent: React.FC<EmbeddedShowContentProps>;
export {};
