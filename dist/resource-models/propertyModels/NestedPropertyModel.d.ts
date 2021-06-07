import { GridRange, Option, OutputFields, PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
import { Errors } from "../../generators/errors/Errors";
import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
import { Model } from "../Model";
import { Record } from "../Record";
import { InputProps } from "../models/InputProps";
export declare abstract class EmbeddedPropertyModel extends PropertyModel {
    resourceName: string;
    resource: Resource;
    constructor(id: string, others: PropertyModelCore);
    getResource(): Resource;
    manipulateErrors(fetchErrors: Errors): Errors;
    getOutputField(props: OutputFields, outputElement?: undefined): React.ReactElement<any, any> | null;
}
export interface EmbeddedInputFields extends InputProps {
    inputHandler: (vars: any) => void;
    model: EmbeddedPropertyModel;
    errors: Errors;
    form?: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?: string;
    modifyOnlyLastElement?: boolean;
    editabilityRule?: () => any;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    single?: boolean;
    modifyRule?: any;
    record: Map<number, Record>;
}
export interface EmbeddedSingleInputFields extends InputProps {
    inputHandler: (vars: any) => void;
    model: EmbeddedPropertyModel;
    errors: Errors;
    form?: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?: string;
    modifyOnlyLastElement?: boolean;
    editabilityRule?: () => any;
    write?: boolean;
    read?: boolean;
    listValue?: any;
    listDataTransformer?: any;
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    single?: boolean;
    modifyRule?: any;
    record: Record;
    refresh?: () => void;
}
export interface EmbeddedSingleOutputFields extends OutputFields {
    showElement?: React.DetailedReactHTMLElement<any, any>;
    record: Record;
    model: Model;
}
export interface EmbeddedMultipleOutputFields extends OutputFields {
    showElement?: React.DetailedReactHTMLElement<any, any>;
    record: Map<number, Record>;
    model: Model;
    list: boolean;
    table: any[];
}
