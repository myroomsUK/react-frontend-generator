import _ from 'lodash';
import { EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord, PropertyRecord } from "./PropertyRecord";
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
                return accumulator.properties.find((property) => property.name === value);
            }
            else if (accumulator instanceof EmbeddedMultiplePropertyRecord) {
                debugger;
            }
            else if (accumulator instanceof EmbeddedSinglePropertyRecord) {
                return accumulator.getPropertyRecord(value);
            }
            else if (accumulator === undefined) {
                return undefined;
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
                const result = jsonModel[key].map((element) => Record.createFromJson(element));
                return new EmbeddedMultiplePropertyRecord(key, result);
            }
            else if (typeof jsonModel[key] === "object") {
                return new EmbeddedSinglePropertyRecord(key, Record.createFromJson(jsonModel[key]));
            }
            else {
                return new PropertyRecord(key, jsonModel[key]);
            }
        });
        return new Record(properties);
    }
}
