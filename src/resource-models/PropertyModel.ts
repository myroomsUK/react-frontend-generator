import {Resource} from "./Resource";
import _ from "lodash";
import React, {ReactElement} from "react";
import {Errors} from "../generators/errors/Errors";

export type InputType ="id"| "boolean" | "reference" | "embedded_single" | "embedded_multiple" | "file_single" | "file_multiple" | "integer" | "date" | "float" | "enum" | "string" | "phone" | "money" | "array" |"textarea" | "enum_single"| "enum_multiple";

export interface PropertyModel{
    id:string;
    type:InputType;
    label:string;
    validators?: string[];
    errorMessages?: string[];
    resourceName:string;
    optionText:string;
    single?:boolean;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?:GridRange;
    md?:GridRange;
    adornment?:string,
    showElement?:React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>any,
    write?:boolean,
    read?:boolean,
    listValue?:any,
    listDataTransformer?:any,
    areImages?: boolean;
}

export type GridRange = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export type Option = {
    id: string;
    label:string;
}

/**
 * @Property {id} - Name of the property
 */
export abstract class PropertyModel {
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

    constructor(id: string, rest: any) {
        const {type, label, validators = [], errorMessages = [], resourceName, optionText, form, xs = 12, md = 6, write = false, read = false} = rest;
        this.id = id;
        this.type = type;
        this.label = label;
        this.validators = validators;
        this.errorMessages = errorMessages;
        this.resourceName = resourceName;
        this.optionText = optionText;
        this.form = form;
        this.xs = xs;
        this.md = md;
        this.write = write;
        this.read = read;
    }

    abstract manipulateErrors(errors:Errors):any;

    abstract setInputField(props: any): ReactElement<any, any> | null;

    abstract getOutputField(props:any): ReactElement<any, any> |null;

    abstract setOutputField(props:any): ReactElement<any, any> |null;

    abstract getInputOnChangeHandler({formValue, setFormValue}: any): (vars:any) => void;

    abstract getInputField(props:InputFields): ReactElement<any,any>|null;
}

export interface InputFields{
    model: PropertyModel,
    formValue: any,
    setFormValue:  React.Dispatch<React.SetStateAction<{}>>,
    lockedFormValue: any,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
}