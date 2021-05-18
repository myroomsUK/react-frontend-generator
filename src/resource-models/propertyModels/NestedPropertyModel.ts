import {GridRange, InputFields, Option, PropertyModel} from "../PropertyModel";
import {Resource} from "../Resource";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";


export abstract class NestedPropertyModel extends PropertyModel{
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
        const nestedErrors = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({formValue, setFormValue});
        const newProps:EmbeddedInputFields = {...props, errors:nestedErrors, inputHandler:inputHandler, value:formValue[this.id], model:this}
        return this.setInputField(newProps);
    }

    getOutputField(props:any): React.ReactElement<any, any> | null {
        const {record} = props;
        const newProps:any = {...props,  propertyRecord:record[this.id] ?? []}
        return this.setOutputField(newProps);
    }
}


export interface EmbeddedInputFields extends InputFields{
    inputHandler: (vars:any) => void,
    value: any,
    model: NestedPropertyModel,
    errors: Errors,
    form?: React.DetailedReactHTMLElement<any, any>;
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
    listDataTransformer?:any,
    areImages?: boolean;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    single?: boolean;
    modifyRule?: any;

}