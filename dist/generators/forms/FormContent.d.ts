import React from "react";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { Record } from "../../resource-models/Record";
import { PropertyFieldConfiguration } from "../../resource-models/configurations/PropertyFieldConfiguration";
interface FormContentProps {
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
    refresh?: () => void;
    configuration: PropertyFieldConfiguration;
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
