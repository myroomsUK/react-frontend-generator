import React from 'react';
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
export interface FormGeneratorProps {
    resourceName: string;
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    lockedFormValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    text?: string;
    errors: Errors;
    showButton?: boolean;
    formContent?: any;
}
export declare class FormGeneratorPropsObject {
    model: Model;
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    resourceName: string;
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    lockedFormValue: any;
    text?: string;
    errors: Errors;
    showButton?: boolean;
    constructor({ resourceName, submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton, lockedFormValue, resourceId }: FormGeneratorProps);
}
