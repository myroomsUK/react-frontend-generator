import { PropertyModel } from "./PropertyModel";
import React, { ReactElement } from "react";
import { Errors } from "../generators/errors/Errors";
import { Record } from "./Record";
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
    getElement(name: string, formValue: any): {
        propertyModel: PropertyModel;
        record: any;
    };
    /**
     * Create a Model from a valid json Model.
     * @param jsonModel
     */
    static createFromJson(jsonModel: any): Model;
    getInputField(requestedName: string, props: ModelGetInputFieldProps): ReactElement<any, any> | null;
    getOutputField(requestedName: string, props: OutputPropertyProps, showLabel?: boolean): ReactElement<any, any> | null;
    getAllPropertiesReadableNames(): {
        id: string;
        label: string;
    }[];
}
interface OutputPropertyProps {
    model: Model;
    record: Record;
}
export interface ModelGetInputFieldProps {
    model: Model;
    formValue: any;
    setFormValue: React.Dispatch<React.SetStateAction<{}>>;
    lockedFormValue: any;
    errors: Errors;
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap: () => void;
}
export {};
