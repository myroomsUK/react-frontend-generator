import React, {DetailedReactHTMLElement, ReactElement} from "react";
import {Errors} from "../generators/errors/Errors";
import {FormValue} from "./formvalue/FormValue";
import {Record} from "./Record";
import {Model} from "./Model";
import {PropertyProps} from "./models/PropertyProps";
import {InputProps, InputPropsInterface} from "./models/InputProps";
import {OutputProps} from "./models/OutputProps";
import {FieldProps} from "./models/FieldProps";
import {
    PropertyFieldConfiguration,
    PropertyFieldConfigurationInterface
} from "./configurations/PropertyFieldConfiguration";

export type InputType ="id"| "boolean" | "reference" | "embedded_single" | "embedded_multiple" | "file_single" | "file_multiple" | "integer" | "date" | "float" | "enum" | "string" | "phone" | "money" | "array" |"textarea" | "enum_single"| "enum_multiple";

export interface PropertyModel{
    id:string;
    type:InputType;
    label:string;
    validators?: string[];
    errorMessages?: string[];
    resourceName:string;
    optionText:string;
    write?:boolean,
    read?:boolean,
    single?:boolean;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?:GridRange;
    md?:GridRange;
    adornment?:string,
    showElement?:React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>any,
    listValue?:any,
    listDataTransformer?:any,
    areImages?: boolean;
    colorMap ?: object;
}

export type GridRange = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export type FieldType = "edit"| "show";
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
    colorMap ?: object;

    constructor(id: string, rest: any) {
        const {type, label, validators = [], errorMessages = [], resourceName, optionText, form, xs = 12, md = 6, write = false, read = false, colorMap} = rest;
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
        this.colorMap = colorMap;
    }

    abstract manipulateErrors(errors:Errors):any;

    abstract setInputField(props: InputPropsInterface, configuration?:PropertyFieldConfiguration): ReactElement<any, any> | null;

    abstract getInputField(props:InputPropsInterface, configuration?:PropertyFieldConfiguration): ReactElement<any,any>|null;

    abstract getOutputField(props:InputPropsInterface, configuration?:PropertyFieldConfiguration): ReactElement<any, any> |null;

    abstract setOutputField(props:InputPropsInterface, configuration?:PropertyFieldConfiguration): ReactElement<any, any> |null;

    abstract getInputOnChangeHandler(props: InputOnChangeHandler): (vars:any) => void;

    abstract getRecord(jsonValue: any): any;

    abstract getFormValue(value: any):any;

    getPropertyField(props:InputPropsInterface, isEdit: boolean = true ){
        return (isEdit) ? this.getInputField(props) : this.getOutputField(props)
    }

}

export interface InputOnChangeHandler{
    formValue:FormValue,
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
}

export interface InputFields{
    model: PropertyModel,
    formValue: FormValue | Map<number, FormValue>,
    record?: Record | Map<number,Record>,
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
    lockedFormValue: FormValue,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    form?: React.DetailedReactHTMLElement<any, any>,
    refreshReferencesMap:()=>void;
    inputElement?: DetailedReactHTMLElement<any, any>,
    refresh?: () => void
}


