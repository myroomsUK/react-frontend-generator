import { PropertyRecord } from "./PropertyRecord";
import { FormValue } from "./formvalue/FormValue";
import { Model } from "./Model";
export interface OldRecord {
    properties: PropertyRecord[];
    generateFormValue(): FormValue;
}
export declare class Record extends Map<string, any> {
    static createFromJson(jsonModel: any, model: Model): Record;
    getPropertyRecord(name: string): any;
    toJson(): void;
}
