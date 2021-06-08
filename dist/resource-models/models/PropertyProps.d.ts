import { Record } from "../Record";
import { FormValue } from "../formvalue/FormValue";
import React from "react";
import { Errors } from "../../generators/errors/Errors";
import { FieldProps } from "./FieldProps";
import { PropertyModel } from "../PropertyModel";
export interface PropertyPropsInterface {
    model: PropertyModel;
    record: Record | Map<number, Record> | undefined;
    formValue: FormValue | Map<number, FormValue>;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    showLabel?: boolean;
}
export declare class PropertyProps {
    model: PropertyModel;
    record: Record | Map<number, Record> | undefined;
    formValue: FormValue | Map<number, FormValue>;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    showlabel: boolean;
    constructor({ model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, showLabel }: PropertyPropsInterface);
    static createFromFieldProps(requestedName: string, props: FieldProps): PropertyProps;
}
