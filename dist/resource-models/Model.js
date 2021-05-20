import _ from 'lodash';
import { PropertyModelRegistry } from "./PropertyModelRegistry";
import { EmbeddedPropertyModel } from "./propertyModels/NestedPropertyModel";
export class Model {
    constructor(properties) {
        this.properties = properties;
    }
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
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
                if (accumulator instanceof EmbeddedPropertyModel) {
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
    /**
     * Create a Model from a valid json Model.
     * @param jsonModel
     */
    static createFromJson(jsonModel) {
        const properties = Object.keys(jsonModel).map(key => PropertyModelRegistry.get(key, jsonModel[key]));
        return new Model(properties);
    }
    getInputField(requestedName, props) {
        return this.getProperty(requestedName).getInputField(Object.assign(Object.assign({}, props), { model: this.getProperty(requestedName) }));
    }
    getOutputField(requestedName, props, showLabel = true) {
        return this.getProperty(requestedName).getOutputField(Object.assign(Object.assign({}, props), { model: this.getProperty(requestedName), showLabel: showLabel }));
    }
    getAllPropertiesReadableNames() {
        return this.properties.filter((propertyModel) => propertyModel.read === true).map((propertyModel) => {
            return {
                id: propertyModel.id,
                label: propertyModel.label
            };
        });
    }
}
