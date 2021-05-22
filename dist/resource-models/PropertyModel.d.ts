import React, { ReactElement } from "react";
import { Errors } from "../generators/errors/Errors";
import { PropertyRecord } from "./PropertyRecord";
import { FormValue } from "./formvalue/FormValue";
export declare type InputType = "id" | "boolean" | "reference" | "embedded_single" | "embedded_multiple" | "file_single" | "file_multiple" | "integer" | "date" | "float" | "enum" | "string" | "phone" | "money" | "array" | "textarea" | "enum_single" | "enum_multiple";
export interface PropertyModel {
    id: string;
    type: InputType;
    label: string;
    validators?: string[];
    errorMessages?: string[];
    resourceName: string;
    optionText: string;
    write?: boolean;
    read?: boolean;
    single?: boolean;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?: string;
    showElement?: React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?: boolean;
    editabilityRule?: () => any;
    listValue?: any;
    listDataTransformer?: any;
    areImages?: boolean;
}
export declare type GridRange = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export declare type Option = {
    id: string;
    label: string;
};
/**
 * @Property {id} - Name of the property
 */
export declare abstract class PropertyModel {
    id: string;
    type: InputType;
    label: string;
    validators?: string[];
    errorMessages?: string[];
    resourceName: string;
    optionText: string;
    form: React.DetailedReactHTMLElement<any, any>;
    xs?: GridRange;
    md?: GridRange;
    write?: boolean;
    read?: boolean;
    constructor(id: string, rest: any);
    abstract manipulateErrors(errors: Errors): any;
    abstract setInputField(props: any): ReactElement<any, any> | null;
    abstract getOutputField(props: OutputFields): ReactElement<any, any> | null;
    abstract setOutputField(props: OutputFields): ReactElement<any, any> | null;
    abstract getInputOnChangeHandler(props: InputOnChangeHandler): (vars: any) => void;
    abstract getInputField(props: InputFields): ReactElement<any, any> | null;
    abstract getRecord(jsonValue: any): any;
    abstract getFormValue(value: any): any;
    abstract getJsonFormValue(value: any): any;
}
export interface InputOnChangeHandler {
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
}
export interface InputFields {
    model: PropertyModel;
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: any;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
}
export interface OutputFields {
    record: PropertyRecord | PropertyRecord[] | undefined;
    showLabel: boolean;
}
