import {Record} from "../Record";
import {FormValue} from "../formvalue/FormValue";
import React from "react";
import {Errors} from "../../generators/errors/Errors";
import {Model} from "../Model";
import {FieldProps} from "./FieldProps";
import _ from "lodash";
import {PropertyModel} from "../PropertyModel";

export interface PropertyPropsInterface{
    model: PropertyModel,
    record: Record | Map<number, Record> | undefined,
    formValue: FormValue | Map<number, FormValue>,
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
    lockedFormValue: FormValue,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    showLabel?: boolean;
}

export class PropertyProps{
    model: PropertyModel
    record: Record | Map<number, Record> | undefined
    formValue: FormValue | Map<number, FormValue>
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>
    lockedFormValue: FormValue
    errors: Errors
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    showlabel: boolean;

    constructor({model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, showLabel=true}:PropertyPropsInterface) {
        this.model = model;
        this.record = record;
        this.formValue = formValue;
        this.setFormValue = setFormValue;
        this.lockedFormValue = lockedFormValue;
        this.errors = errors;
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.showlabel = showLabel;
    }

    static createFromFieldProps(requestedName:string, props:FieldProps): PropertyProps{
        const {formValue, record, setFormValue, model} = props
        const localFormValue = (formvalue:any)=>{
            const split = _.split(requestedName, ".");
            split.pop();
            const reqName = split.join(".");
            const newFormValue = split.length===0 ? formvalue : formValue.updateFormValue(reqName, formvalue);
            setFormValue(newFormValue)
        };

        const propertyProps = new PropertyProps({...props, model:model.getProperty(requestedName)})
        propertyProps.formValue = (formValue) ? formValue.getPropertyFormValue(requestedName) : undefined;
        propertyProps.record = record ?  record.getPropertyRecord(requestedName) : undefined;
        propertyProps.setFormValue = localFormValue;

        return propertyProps;

    }
}