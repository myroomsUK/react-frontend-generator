import { Record } from "../Record";
import { Model } from "../Model";
export declare class FormValue extends Object {
    /**
     * Create a FormValue from a valid Record.
     * @param record
     * @param model
     */
    static createFromRecord(record: Record, model: Model): FormValue;
    static createFromRecordNoModel(record: Record): FormValue;
    updateFormValue(name: string, value: any): FormValue;
    getPropertyFormValue(name: string): any;
    static toJson(formValue: any): object;
    set(name: string, value: any): FormValue;
    has(name: string): boolean;
}
