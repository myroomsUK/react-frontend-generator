import { PropertyModel } from "./PropertyModel";
export interface Model {
    properties: PropertyModel[];
}
export declare class Model {
    constructor(properties: PropertyModel[]);
    getProperty(name: string): PropertyModel;
    getPropertyByResourceName(resourceName: string): PropertyModel;
    addPropertiesToRequestedElement(propertiesObject: any, resourceName: string): this;
    static createFromJson(jsonModel: any): Model;
}
