import React from "react";
import { Model } from "../../resource-models/Model";
import { Record } from "../../resource-models/Record";
export interface IterableShowContentProps {
    record: Map<number, Record>;
    model: Model;
    resourceName: string;
    showElement?: React.DetailedReactHTMLElement<any, any>;
}
export declare const IterableShowContent: React.FC<IterableShowContentProps>;
