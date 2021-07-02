import { PropertyModel } from "./PropertyModel";
import { DetailedReactHTMLElement, ReactElement } from "react";
import { FieldProps } from "./models/FieldProps";
import { PropertyProps } from "./models/PropertyProps";
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
     * @param resourceName
     */
    static createFromJson(jsonModel: any, resourceName: string): Model;
    setFieldProps(requestedName: string, props: FieldProps): PropertyProps;
    getInputField(requestedName: string, props: FieldProps, viewElement: DetailedReactHTMLElement<any, any>): ReactElement<any, any> | null;
    getOutputField(requestedName: string, props: FieldProps, viewElement: DetailedReactHTMLElement<any, any>, showLabel?: boolean): ReactElement<any, any> | null;
    getAllPropertiesReadableNames(): {
        id: string;
        label: string;
    }[];
}
