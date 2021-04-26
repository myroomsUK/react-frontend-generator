import React from "react";
import { PropertyModel } from "../../resource-models/PropertyModel";
import { Model } from "../../resource-models/Model";
interface Props {
    requestedName: string;
    record: any;
    model: PropertyModel | Model;
    resourceName: string;
    showElement?: any;
    noLabel?: boolean;
}
export declare const GenericShowField: React.FC<Props>;
export {};
