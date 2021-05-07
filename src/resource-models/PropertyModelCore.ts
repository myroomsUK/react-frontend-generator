import {Resource} from "./Resource";
import React from "react";
import {GridRange, Option} from "./PropertyModel";
import {InputType} from "../generators/forms/genericInputField";

export interface PropertyModelCore{
    type:InputType;
    label:string;
    validators?: string[];
    errorMessages?: string[];
    resourceName:string;
    optionText:string;
    single?:boolean;
    resource?: Resource;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?: GridRange;
    md?: GridRange;
    adornment?:string,
    showElement?:React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>void,
    write?:boolean,
    read?:boolean,
    listValue?:any,
    listDataTransformer?:any
}

export class PropertyModelCore{
    type:InputType;
    label:string;
    validators?: string[];
    errorMessages?: string[];
    resourceName:string;
    optionText:string;
    single?:boolean;
    resource?: Resource;
    form: React.DetailedReactHTMLElement<any, any>;
    options?: Option[];
    xs?:GridRange;
    md?:GridRange;
    adornment?:string;
    showElement?:React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>void;
    write?:boolean;
    read?:boolean;
    listValue?:any;
    listDataTransformer?:any;
    areImages?:boolean;

    constructor({type, label, validators = [], errorMessages = [], resourceName, optionText, single, resource, form, options, xs = 12, md = 6, adornment, showElement, modifyOnlyLastElement=false, editabilityRule, write=false, read=false, listValue, listDataTransformer, areImages}:any) {
        this.type = type;
        this.label = label;
        this.validators = validators;
        this.errorMessages = errorMessages;
        this.resourceName = resourceName;
        this.optionText = optionText;
        this.single = single;
        this.resource = resource ? new Resource(resource) : undefined;
        this.form = form;
        this.options = options;
        this.xs = xs;
        this.md = md;
        this.adornment = adornment;
        this.showElement = showElement;
        this.modifyOnlyLastElement = modifyOnlyLastElement;
        this.editabilityRule = editabilityRule;
        this.write = write;
        this.read = read;
        this.listValue = listValue;
        this.listDataTransformer = listDataTransformer;
        this.areImages = areImages;
    }
}