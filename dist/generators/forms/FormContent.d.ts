import React from "react";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
interface FormContentProps {
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: object;
    lockedFormValue: object;
    errors: Errors;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    formContent?: React.DetailedReactHTMLElement<any, any>;
}
/**
 *
 * @constructor
 *
 * FormContent component is responsible for overriding the form, passing all the required props
 * @param props
 */
export declare const FormContent: React.FC<FormContentProps>;
export {};
