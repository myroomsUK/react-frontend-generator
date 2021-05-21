import { PropertyRecord } from "../PropertyRecord";
import { Record } from "../Record";
export declare class FormValue extends Map<string, any> {
    constructor();
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getPropertyValue(name: string): PropertyRecord | undefined;
    /**
     * Create a FormValue from a valid Record.
     * @param record
     */
    static createFromRecord(record: Record): FormValue;
    updateFormValue(name: string, value: any): FormValue;
}
