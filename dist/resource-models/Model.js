import { PropertyModel } from "./PropertyModel";
import _ from 'lodash';
export class Model {
    constructor(properties) {
        this.properties = properties;
    }
    getProperty(name) {
        const split = _.split(name, ".");
        const reducerModel = (accumulator, value) => {
            if (accumulator instanceof Model) {
                const propertyModel = accumulator.properties.find((property) => property.id === value);
                if (propertyModel)
                    return propertyModel;
                throw new Error(`Undefined model for ${value} and name was ${name}`);
            }
            else {
                if (accumulator.getResource()) {
                    const propertyModel = accumulator.getResource().getModel().getProperty(value);
                    if (propertyModel)
                        return propertyModel;
                    throw new Error(`Undefined model for ${value}`);
                }
                else {
                    throw new Error(`Undefined resource in ${accumulator}`);
                }
            }
        };
        // @ts-ignore
        return split.reduce(reducerModel, this);
    }
    getPropertyByResourceName(resourceName) {
        const propertyModel = this.properties.find(property => property.resourceName === resourceName);
        if (propertyModel)
            return propertyModel;
        throw new Error("Property by resource name not found");
    }
    addPropertiesToRequestedElement(propertiesObject, resourceName) {
        this.properties.find(property => {
            if (property.resourceName === resourceName) {
                property = _.merge(property, propertiesObject);
            }
            return property.resourceName === resourceName;
        });
        return this;
    }
    static createFromJson(jsonModel) {
        const properties = Object.keys(jsonModel).map(key => PropertyModel.get(key, jsonModel[key]));
        return new Model(properties);
    }
}
