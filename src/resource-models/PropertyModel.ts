import {Resource} from "./Resource";
import _ from "lodash";
import React from "react";
import {PropertyModelCore} from "./PropertyModelCore";
import {InputType} from "../generators/forms/genericInputField";
import {EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, REFERENCE} from "../generators/forms/inputs/InputTypes";


export interface PropertyModel{
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
    adornment?:string,
    showElement?:React.DetailedReactHTMLElement<any, any>;
    modifyOnlyLastElement?:boolean;
    editabilityRule?:()=>any,
    write?:boolean,
    read?:boolean,
    listValue?:any,
    listDataTransformer?:any
}

export type GridRange = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export type Option = {
    id: string;
    label:string;
}

/**
 * @Property {id} - Name of the property
 */
export class PropertyModel{
    id:string;
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
    editabilityRule?:()=>any;
    write?:boolean;
    read?:boolean;
    listValue?:any;
    listDataTransformer?:any;

    constructor(id:string, rest:PropertyModelCore ) {
        const {type, label, validators = [], errorMessages = [], resourceName, optionText, single, resource, form, options, xs = 12, md = 6, adornment, showElement, modifyOnlyLastElement=false, editabilityRule = (() => {return true}), write=false, read=false, listValue, listDataTransformer} = rest;
        this.id = id;
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
    }

    static get(id:string,others:PropertyModelCore):PropertyModel{
        return new PropertyModel(id, others);
    }

    static createReferenceElement(name:string, resourceName:string):PropertyModel{

        return new PropertyModel(name, new PropertyModelCore({type:REFERENCE, resourceName: resourceName}))
    }

    addPropertiesToRequestedElement(propertiesObject:any, resourceName:string):any{
        return _.merge(propertiesObject, this);
    }

    getResource():Resource{
        if(this.isNested() && this.resource!==undefined) return this.resource;
        throw new Error("Accessing inexistent resource");
    }

    isNested():boolean{
        return [EMBEDDED_SINGLE, EMBEDDED_MULTIPLE].includes(this.type);
    }


}