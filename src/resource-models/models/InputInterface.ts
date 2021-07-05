import {PropertyModel} from "../PropertyModel";
import {FormValue} from "../formvalue/FormValue";
import React from "react";
import {Errors} from "../../generators/errors/Errors";

export interface InputInterface{
    model: PropertyModel,
    record:any,
    formValue: FormValue | Map<number, FormValue>,
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
    lockedFormValue: FormValue,
    errors: Errors,
    refresh:()=>void,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    showLabel?: boolean;
}