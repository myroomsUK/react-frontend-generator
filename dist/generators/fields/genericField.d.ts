import React from "react";
import { PropertyModel } from "../../resource-models/PropertyModel";
export interface GenericField {
    propertyRecord: any;
    propertyModel: PropertyModel;
    resourceName: string;
    originalId?: number;
    table?: boolean;
    showElement?: any;
}
export declare const GenericField: React.FC<GenericField>;
