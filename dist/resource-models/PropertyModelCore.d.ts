import { Resource } from "./Resource";
import React from "react";
import { GridRange, Option } from "./PropertyModel";
import { InputType } from "../generators/forms/genericInputField";
export interface PropertyModelCore {
    type: InputType;
    label: string;
    validators?: string[];
    errorMessages?: string[];
    resourceName: string;
    optionText: string;
    single?: boolean;
    resource?: Resource;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?: string;
    showElement?: React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?: boolean;
    editabilityRule?: () => void;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
}
export declare class PropertyModelCore {
    type: InputType;
    label: string;
    validators?: string[];
    errorMessages?: string[];
    resourceName: string;
    optionText: string;
    single?: boolean;
    resource?: Resource;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?: string;
    showElement?: React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?: boolean;
    editabilityRule?: () => void;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
    constructor({ type, label, validators, errorMessages, resourceName, optionText, single, resource, form, options, xs, md, adornment, showElement, modifyOnlyLastElement, editabilityRule, write, read, listValue, listDataTransformer }: any);
}
