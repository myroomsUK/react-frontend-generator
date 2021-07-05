import React from "react";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { Record } from "../../resource-models/Record";
interface EmbeddedFormContentProps {
    model: Model;
    formContent?: React.DetailedReactHTMLElement<any, any>;
    setParentFormValue: (values: any) => void;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    record: Record;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    refresh: () => void;
}
export declare const EmbeddedFormContent: React.FC<EmbeddedFormContentProps>;
export {};
