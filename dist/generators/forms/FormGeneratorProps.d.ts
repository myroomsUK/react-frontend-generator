import React from 'react';
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
export interface FormGeneratorProps {
    resourceName: string;
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: any;
    lockedFormValue: any;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    text?: string;
    errors: Errors;
    showButton?: boolean;
    formContent?: any;
}
export declare class FormGeneratorPropsObject {
    model: Model;
    formValue: any;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
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
