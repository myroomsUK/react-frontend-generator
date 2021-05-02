import React from "react";
import { Model } from "../../resource-models/Model";
interface FormContentProps {
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: object;
    lockedFormValue: object;
    errors: object;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    form?: React.DetailedReactHTMLElement<any, any>;
    resourceName: string;
    resourceId?: string;
}
export declare const FormContent: React.FC<FormContentProps>;
export {};
