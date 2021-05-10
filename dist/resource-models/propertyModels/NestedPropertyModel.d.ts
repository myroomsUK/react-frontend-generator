import { GridRange, InputFields, Option, PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
import { Errors } from "../../generators/errors/Errors";
import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
export declare abstract class NestedPropertyModel extends PropertyModel {
    resourceName: string;
    resource: Resource;
    constructor(id: string, others: PropertyModelCore);
    getResource(): Resource;
    manipulateErrors(fetchErrors: Errors): Errors;
    getInputField(props: InputFields): React.ReactElement<any, any> | null;
}
export interface EmbeddedInputFields extends InputFields {
    inputHandler: (vars: any) => void;
    value: any;
    model: NestedPropertyModel;
    errors: Errors;
    form?: React.DetailedReactHTMLElement<any, any>;
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
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    single?: boolean;
    modifyRule?: any;
}
