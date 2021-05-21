import { GridRange, InputFields, Option, OutputFields, PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
import { Errors } from "../../generators/errors/Errors";
import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
import { Model } from "../Model";
import { EmbeddedPropertyRecord } from "../PropertyRecord";
export declare abstract class EmbeddedPropertyModel extends PropertyModel {
    resourceName: string;
    resource: Resource;
    constructor(id: string, others: PropertyModelCore);
    getResource(): Resource;
    manipulateErrors(fetchErrors: Errors): Errors;
    getInputField(props: InputFields): React.ReactElement<any, any> | null;
    getOutputField(props: OutputFields): React.ReactElement<any, any> | null;
}
export interface EmbeddedInputFields extends InputFields {
    inputHandler: (vars: any) => void;
    value: any;
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
}
export interface EmbeddedSingleOutputFields extends OutputFields {
    showElement?: React.DetailedReactHTMLElement<any, any>;
    record: EmbeddedPropertyRecord;
    model: Model;
}
export interface EmbeddedMultipleOutputFields extends OutputFields {
    showElement?: React.DetailedReactHTMLElement<any, any>;
    record: EmbeddedPropertyRecord[];
    model: Model;
}
