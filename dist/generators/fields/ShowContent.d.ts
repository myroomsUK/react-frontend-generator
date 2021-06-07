import React from "react";
import { Model } from "../../resource-models/Model";
import { Record } from "../../resource-models/Record";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { Errors } from "../errors/Errors";
export interface ShowContent {
    showElement?: React.DetailedReactHTMLElement<any, any>;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    record?: Record;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    lockedFormValue: FormValue;
    errors: Errors;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    formContent?: React.DetailedReactHTMLElement<any, any>;
    refresh?: () => void;
}
export declare const ShowContent: React.FC<ShowContent>;
