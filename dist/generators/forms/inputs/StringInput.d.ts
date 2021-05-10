import React from "react";
import { StringModel } from "../../../resource-models/propertyModels/StringModel";
export interface StringInput {
    model: StringModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export declare const StringInput: React.FC<StringInput>;
