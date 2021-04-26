import React from "react";
import { PropertyModel } from "../../resource-models/PropertyModel";
import { Errors } from "../errors/Errors";
export declare type InputType = "boolean" | "reference" | "embedded_single" | "embedded_multiple" | "file_single" | "file_multiple" | "integer" | "date" | "float" | "enum" | "string" | "phone" | "money" | "array";
interface InputField {
    type: InputType;
    model: PropertyModel;
    value: any;
    parentFormValue: any;
    setParentFormValue: (name: string) => void;
    referencesMap: any;
    refreshReferencesMap: () => void;
    partialSubmitHandler: (formValue: any) => Promise<any>;
    onClick: (variables: any[]) => void;
    errors: Errors;
    requestedName: string;
    form?: React.DetailedReactHTMLElement<any, any>;
    errorMessage?: string;
    submitHandler: (e: any) => Promise<any>;
    hasError: boolean;
    resourceName: string;
    resourceId?: string;
}
export declare const InputField: React.FC<InputField>;
export {};
