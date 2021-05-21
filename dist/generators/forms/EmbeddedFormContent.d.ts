import React from "react";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
interface EmbeddedFormContentProps {
    model: Model;
    formContent?: React.DetailedReactHTMLElement<any, any>;
    setParentFormValue: (values: any) => void;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
}
export declare const EmbeddedFormContent: React.FC<EmbeddedFormContentProps>;
export {};
