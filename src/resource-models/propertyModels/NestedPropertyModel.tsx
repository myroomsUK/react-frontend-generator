import {GridRange, InputFields, Option, OutputFields, PropertyModel} from "../PropertyModel";
import {Resource} from "../Resource";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";
import {Typography} from "@material-ui/core";
import _ from "lodash";
import {Model} from "../Model";
import {Record} from "../Record";
import {FormValue} from "../formvalue/FormValue";
import {SingleSetInputFieldProps} from "../models/SetInputFieldProps";
import {InputProps} from "../models/InputProps";


export abstract class EmbeddedPropertyModel extends PropertyModel{
    resourceName:string;
    resource:Resource;

    constructor(id:string, others:PropertyModelCore ) {
        super(id, others);
        this.resourceName = others.resourceName;
        this.resource = new Resource(others.resource);
    }
    getResource(): Resource {
        return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }

    manipulateErrors(fetchErrors:Errors): Errors {
        return fetchErrors.nestedSingleErrorExtrapolator(this.id);
    }

    getOutputField(props:OutputFields, outputElement=undefined): React.ReactElement<any, any> | null {
        const {showLabel} = props;
        const newProps = {...props, model: this.getResource().getModel(), showElement:outputElement}
        return <>
            {showLabel && <Typography>{_.startCase(this.label)}</Typography>}
            {this.setOutputField(newProps)}
        </>
    }
}


export interface EmbeddedInputFields extends InputProps{
    inputHandler: (vars:any) => void,
    model: EmbeddedPropertyModel,
    errors: Errors,
    form?: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?:GridRange;
    md?:GridRange;
    adornment?:string,
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>any,
    write?:boolean,
    read?:boolean,
    listValue?:any,
    listDataTransformer?:any,
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    single?: boolean;
    modifyRule?: any;
    record: Map<number, Record>;
}

export interface EmbeddedSingleInputFields extends InputProps{
    inputHandler: (vars:any) => void,
    model: EmbeddedPropertyModel,
    errors: Errors,
    form?: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?:GridRange;
    md?:GridRange;
    adornment?:string,
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>any,
    write?:boolean,
    read?:boolean,
    listValue?:any,
    listDataTransformer?:any,
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    single?: boolean;
    modifyRule?: any;
    record: Record;
    refresh?: () => void
}

export interface EmbeddedSingleOutputFields extends OutputFields{
    showElement?:React.DetailedReactHTMLElement<any, any>;
    record: Record,
    model: Model
}

export interface EmbeddedMultipleOutputFields extends OutputFields{
    showElement?:React.DetailedReactHTMLElement<any, any>;
    record: Map<number,Record>,
    model: Model,
    list: boolean,
    table: any[]
}