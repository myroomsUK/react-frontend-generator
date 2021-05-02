import React from 'react';
import { Model } from "../../resource-models/Model";
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
    errors: object;
    showButton?: boolean;
}
export declare class FormGeneratorPropsObject {
    resourceName: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: any;
    lockedFormValue: any;
    setFormValue: any;
    text?: string;
    errors: object;
    showButton?: boolean;
    constructor({ resourceName, submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton, lockedFormValue }: FormGeneratorProps);
}
