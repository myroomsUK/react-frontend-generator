import React from "react";
import { Model } from "../../resource-models/Model";
import { EmbeddedMultiplePropertyRecord } from "../../resource-models/PropertyRecord";
export interface IterableShowContentProps {
    record: EmbeddedMultiplePropertyRecord;
    model: Model;
    resourceName: string;
    showElement?: any;
}
export declare const IterableShowContent: React.FC<IterableShowContentProps>;
