import _ from 'lodash';
import { EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord, PropertyRecord } from "./PropertyRecord";
import { FormValue } from "./formvalue/FormValue";
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
    getPropertyRecordValue(name) {
        var _a;
        return (_a = this.getPropertyRecord(name)) === null || _a === void 0 ? void 0 : _a.value;
    }
    generateFormValue() {
        return FormValue.createFromRecord(this);
    }
    ;
}
export class NewRecord extends Map {
    static createFromJson(jsonModel) {
        const record = new NewRecord();
        Object.keys(jsonModel).forEach(key => {
            if (Array.isArray(jsonModel[key])) {
                const map = new Map();
                jsonModel[key].forEach((element, index) => map.set(index, NewRecord.createFromJson(element)));
                record.set(key, map);
            }
            else if (typeof jsonModel[key] === "object") {
                record.set(key, NewRecord.createFromJson(jsonModel[key]));
            }
            else {
                record.set(key, jsonModel[key]);
                return new PropertyRecord(key, jsonModel[key]);
            }
        });
        return record;
    }
    toJson() {
        const json = {};
        const entries = Array.from(this.entries());
        entries.forEach(([key, value], index) => {
            if (value instanceof NewRecord) {
                // @ts-ignore
                json[key] = value.toJson();
            }
            else if (value instanceof Map) {
                // @ts-ignore
                json[key] = Array.from(value.values()).map((item) => item.toJson());
            }
            else {
                // @ts-ignore
                json[key] = value;
            }
        });
    }
}
