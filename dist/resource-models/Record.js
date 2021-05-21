import _ from 'lodash';
import { EmbeddedPropertyRecord, PropertyRecord } from "./PropertyRecord";
export class Record {
    constructor(properties) {
        this.properties = properties;
    }
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getPropertyRecord(name) {
        const split = _.split(name, ".");
        const reducerModel = (accumulator, value) => {
            if (accumulator instanceof Record) {
                const propertyRecord = accumulator.properties.find((property) => property.name === value);
                return propertyRecord;
                throw new Error(`Undefined property record for ${value} and name was ${name}`);
            }
            else {
                if (accumulator instanceof EmbeddedPropertyRecord) {
                    const propertyRecord = accumulator.getPropertyRecord(name);
                    return propertyRecord;
                    throw new Error(`Undefined record for ${value}`);
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
     * Create a Record from a valid json Record.
     * @param jsonModel
     */
    static createFromJson(jsonModel) {
        const properties = Object.keys(jsonModel).map(key => {
            if (Array.isArray(jsonModel[key])) {
                return jsonModel[key].map((element) => new EmbeddedPropertyRecord(key, Record.createFromJson(element)));
            }
            else if (typeof jsonModel[key] === "object") {
                return new EmbeddedPropertyRecord(key, Record.createFromJson(jsonModel[key]));
            }
            else {
                return new PropertyRecord(key, jsonModel[key]);
            }
        });
        return new Record(properties);
    }
}
