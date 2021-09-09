import {Model} from "../Model";
import {Record} from "../Record";
import {FormValue} from "../formvalue/FormValue";
import React from "react";
import {Errors} from "../../generators/errors/Errors";

export interface ModelInputInterface{
    model: Model,
    record: Record,
    formValue: FormValue,
    setFormValue:  React.Dispatch<React.SetStateAction<FormValue>>,
    lockedFormValue: FormValue,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    loading: boolean;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
    refresh: ()=>void;
}
