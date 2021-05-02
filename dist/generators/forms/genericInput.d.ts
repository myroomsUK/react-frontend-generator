import React from "react";
import { PropertyModel } from "../../resource-models/PropertyModel";
import { Model } from "../../resource-models/Model";
import { Errors } from "../errors/Errors";
export interface GenericInput {
    requestedName: string;
    formValue: any;
    lockedFormValue: any;
    form?: React.DetailedReactHTMLElement<any, any>;
    model: PropertyModel | Model;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    errors: Errors | any;
    partialSubmitHandler: (formValue: any) => Promise<any>;
    submitHandler: (e: any) => Promise<any>;
    resourceName: string;
    resourceId?: string;
}
export declare const GenericInput: React.FC<GenericInput>;
