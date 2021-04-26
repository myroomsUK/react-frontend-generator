import React from "react";
import { PropertyModel } from "../../../resource-models/PropertyModel";
interface Props {
    hasError: boolean;
    model: PropertyModel;
    errorMessage?: string;
    label: string;
    onClick: (e: any) => void;
    value: any;
    adornment?: any;
}
export declare const StringInput: React.FC<Props>;
export {};
