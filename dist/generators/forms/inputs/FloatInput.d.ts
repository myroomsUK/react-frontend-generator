import React from "react";
import { FloatModel } from "../../../resource-models/propertyModels/FloatModel";
interface Props {
    model: FloatModel;
    id?: string;
    hasError: boolean;
    errorMessage?: string;
    label?: string;
    onClick: (variables: any[]) => void;
    value: number;
}
export declare const FloatInput: React.FC<Props>;
export {};
