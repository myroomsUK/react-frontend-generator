import React from 'react';
import {Model} from "../../resource-models/Model";


export interface FormGeneratorProps{
    resourceName:string;
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model:Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    formValue: any;
    lockedFormValue:any;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    text?:string;
    errors: object;
    showButton?:boolean;
}

export class FormGeneratorPropsObject{
    resourceName:string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model:Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    formValue: any;
    lockedFormValue:any;
    setFormValue:any;
    text?:string;
    errors: object;
    showButton?:boolean;

    constructor({resourceName, submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton, lockedFormValue}:FormGeneratorProps) {
        this.resourceName = resourceName;
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.model = model;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.formValue = formValue;
        this.lockedFormValue = lockedFormValue;
        this.setFormValue = setFormValue;
        this.text = text;
        this.errors = errors;
        this.showButton = showButton;
    }
}