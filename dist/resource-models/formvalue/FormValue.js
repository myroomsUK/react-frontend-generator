import _ from 'lodash';
import { EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord } from "../PropertyRecord";
import { Record } from "../Record";
export class FormValue extends Map {
    constructor() {
        super();
    }
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getPropertyValue(name) {
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
     * Create a FormValue from a valid Record.
     * @param record
     */
    static createFromRecord(record) {
        const formValue = new FormValue();
        record.properties.forEach((propertyRecord) => {
            formValue.set(propertyRecord.name, propertyRecord.generatePropertyValue());
        });
        return formValue;
    }
    updateFormValue(name, value) {
        const newFormValue = _.cloneDeep(this);
        newFormValue.set(name, value);
        return newFormValue;
    }
}
