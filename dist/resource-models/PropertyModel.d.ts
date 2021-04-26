import { Resource } from "./Resource";
import React from "react";
import { PropertyModelCore } from "./PropertyModelCore";
import { InputType } from "../generators/forms/genericInputField";
export interface PropertyModel {
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
    editabilityRule?: () => any;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
}
export declare type GridRange = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export declare type Option = {
    id: string;
    label: string;
};
/**
 * @Property {id} - Name of the property
 */
export declare class PropertyModel {
    id: string;
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
    editabilityRule?: () => any;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
    constructor(id: string, rest: PropertyModelCore);
    static get(id: string, others: PropertyModelCore): PropertyModel;
    static createReferenceElement(name: string, resourceName: string): PropertyModel;
    addPropertiesToRequestedElement(propertiesObject: any, resourceName: string): any;
    getResource(): Resource;
    isNested(): boolean;
}
