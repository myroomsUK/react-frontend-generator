import React from "react";
import { Errors } from "../errors/Errors";
import { Model } from "../../resource-models/Model";
interface IterableFormContentProps {
    model: Model;
    resourceName: string;
    setParentFormValue: (values: any) => void;
    formContent: React.DetailedReactHTMLElement<any, any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    formValueArray: any[];
    errors: Errors;
    label: string;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    modifyOnlyLastElement?: boolean;
    modifyRule?: (formvalue: any) => boolean;
}
export declare const IterableFormContent: React.FC<IterableFormContentProps>;
export {};
