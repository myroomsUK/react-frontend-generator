import 'date-fns';
import React from "react";
import { DateModel } from "../../../resource-models/propertyModels/DateModel";
import { TextFieldProps } from "@material-ui/core";
export interface DateInput {
    model: DateModel;
    onClick: (e: any, value: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    name?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function ({ model, name, onClick, value, label, hasError, errorMessage }: DateInput): JSX.Element;
export declare const DateValidationInput: React.FC<TextFieldProps>;
