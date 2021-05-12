import { InputFields, PropertyModel } from "./PropertyModel";
import { ReactElement } from "react";
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
    getPropertyByResourceName(resourceName: string): PropertyModel;
    addPropertiesToRequestedElement(propertiesObject: any, resourceName: string): this;
    static createFromJson(jsonModel: any): Model;
    inputProperty(requestedName: string, props: InputFields): ReactElement<any, any> | null;
    getAllPropertiesReadableNames(): {
        id: string;
        label: string;
    }[];
}
