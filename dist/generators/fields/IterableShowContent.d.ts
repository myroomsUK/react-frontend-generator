import React from "react";
import { Model } from "../../resource-models/Model";
import { EmbeddedPropertyRecord } from "../../resource-models/PropertyRecord";
export interface IterableShowContentProps {
    record: EmbeddedPropertyRecord[];
    model: Model;
    resourceName: string;
    showElement?: any;
}
export declare const IterableShowContent: React.FC<IterableShowContentProps>;
