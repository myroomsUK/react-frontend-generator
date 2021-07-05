import {Record} from "../Record";
import {FormValue} from "../formvalue/FormValue";
import React from "react";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModel} from "../PropertyModel";

interface Props{
    model: PropertyModel,
    record: Record
    formValue: FormValue
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
    lockedFormValue: FormValue,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    showLabel?: boolean;
}

export class SinglePropertyProps{
    model: PropertyModel
    record: Record
    formValue: FormValue
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>
    lockedFormValue: FormValue
    errors: Errors
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    showlabel: boolean;

    constructor({model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, showLabel=true}:Props) {
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
}