import { Record } from "../Record";
import { FormValue } from "../formvalue/FormValue";
import React from "react";
import { Errors } from "../../generators/errors/Errors";
import { Model } from "../Model";
interface Props {
    model: Model;
    record: Record;
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    refresh: () => void;
}
export declare class FieldProps {
    model: Model;
    record: Record;
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    refresh: () => void;
    constructor({ model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, refresh }: Props);
}
export {};
