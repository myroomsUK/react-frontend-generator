import { Record } from "../Record";
import { Model } from "../Model";
export declare class FormValue extends Map<string, any> {
    /**
     * Create a FormValue from a valid Record.
     * @param record
     * @param model
     */
    static createFromRecord(record: Record, model: Model): FormValue;
    updateFormValue(name: string, value: any): FormValue;
    getPropertyFormValue(name: string): any;
    toJson(model: Model): {};
}
