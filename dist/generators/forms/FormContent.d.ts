import React from "react";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
interface FormContentProps {
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    lockedFormValue: FormValue;
    errors: Errors;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
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
