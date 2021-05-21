import {GridRange, InputFields, Option, OutputFields, PropertyModel} from "../PropertyModel";
import {Resource} from "../Resource";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";
import {Typography} from "@material-ui/core";
import _ from "lodash";
import {Model} from "../Model";
import {EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord} from "../PropertyRecord";


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

    getInputField(props: InputFields): React.ReactElement<any, any> | null {
        const {errors, formValue, setFormValue} = props;
        const model = this;
        model.label = _.startCase(this.label)
        const nestedErrors = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({formValue, setFormValue});
        const newProps:EmbeddedInputFields = {...props, errors:nestedErrors, inputHandler:inputHandler, value:formValue.get(this.id), model:model}
        return this.setInputField(newProps);
    }

    getOutputField(props:OutputFields): React.ReactElement<any, any> | null {
        const {showLabel} = props;
        const newProps = {...props, model: this.getResource().getModel()}
        return <>
            {showLabel && <Typography>{_.startCase(this.label)}</Typography>}
            {this.setOutputField(newProps)}
        </>
    }
}


export interface EmbeddedInputFields extends InputFields{
    inputHandler: (vars:any) => void,
    value: any,
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

}

export interface EmbeddedSingleOutputFields extends OutputFields{
    showElement?:React.DetailedReactHTMLElement<any, any>;
    record: EmbeddedSinglePropertyRecord,
    model: Model
}

export interface EmbeddedMultipleOutputFields extends OutputFields{
    showElement?:React.DetailedReactHTMLElement<any, any>;
    record: EmbeddedMultiplePropertyRecord,
    model: Model
}