import React from "react";
import { TextareaModel } from "../../../resource-models/propertyModels/TextareaModel";
interface Props {
    model: TextareaModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export declare const TextareaInput: React.FC<Props>;
export {};
