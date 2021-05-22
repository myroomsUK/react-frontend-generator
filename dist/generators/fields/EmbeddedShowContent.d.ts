import React from "react";
import { Model } from "../../resource-models/Model";
import { Record } from "../../resource-models/Record";
interface EmbeddedShowContentProps {
    model: Model;
    record: Record;
    showElement?: React.DetailedReactHTMLElement<any, any>;
}
export declare const EmbeddedShowContent: React.FC<EmbeddedShowContentProps>;
export {};
