import React from 'react';
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { Record } from "../../resource-models/Record";
export interface FormGeneratorProps {
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    record?: Record;
    lockedFormValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    text?: string;
    errors: Errors;
    showButton?: boolean;
    formContent?: any;
    refresh?: () => void;
    isEdit?: boolean;
}
export declare class FormGeneratorPropsObject {
    model: Model;
    formValue: FormValue;
    record?: Record;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    resourceId?: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    lockedFormValue: any;
    text?: string;
    errors: Errors;
    showButton?: boolean;
    refresh?: () => void;
    isEdit: boolean;
    constructor({ submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton, lockedFormValue, resourceId, record, refresh, isEdit }: FormGeneratorProps);
}
