import { PropertyModel } from "./PropertyModel";
import React, { DetailedReactHTMLElement, ReactElement } from "react";
import { Errors } from "../generators/errors/Errors";
import { Record } from "./Record";
import { FormValue } from "./formvalue/FormValue";
export interface Model {
    properties: PropertyModel[];
}
export declare class Model {
    constructor(properties: PropertyModel[]);
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getProperty(name: string): PropertyModel;
    getRecord(name: string, formValue: any): {
        propertyModel: PropertyModel;
        record: any;
    };
    /**
     * Create a Model from a valid json Model.
     * @param jsonModel
     */
    static createFromJson(jsonModel: any): Model;
    setFieldProps(requestedName: string, props: PropertyProps): {
        model: PropertyModel;
        formValue: any;
        record: any;
        setFormValue: (formvalue: any) => void;
        lockedFormValue: FormValue;
        errors: Errors;
        submitHandler: (e: any) => Promise<any>;
        partialSubmitHandler: (e: any) => Promise<any>;
        referencesMap: Map<string, any>;
        refreshReferencesMap: () => void;
    };
    getInputField(requestedName: string, props: PropertyProps, inputElement: DetailedReactHTMLElement<any, any>): ReactElement<any, any> | null;
    getOutputField(requestedName: string, props: PropertyProps, outputElement: DetailedReactHTMLElement<any, any>, showLabel?: boolean): ReactElement<any, any> | null;
    getAllPropertiesReadableNames(): {
        id: string;
        label: string;
    }[];
}
interface PropertyProps {
    model: Model;
    record: Record;
    formValue: FormValue;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    lockedFormValue: FormValue;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
}
export {};
