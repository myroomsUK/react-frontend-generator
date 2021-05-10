import React from "react";
import { EmbeddedMultipleModel } from "../../resource-models/propertyModels/EmbeddedMultipleModel";
interface Props {
    record: any[];
    model: EmbeddedMultipleModel;
    resourceName: string;
    showElement?: any;
}
export declare const IterableShowContent: React.FC<Props>;
export {};
