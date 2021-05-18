import React from "react";
import { Model } from "../../resource-models/Model";
export interface IterableShowContentProps {
    record: any[];
    model: Model;
    resourceName: string;
    showElement?: any;
}
export declare const IterableShowContent: React.FC<IterableShowContentProps>;
