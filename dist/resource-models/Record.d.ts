import { PropertyRecord } from "./PropertyRecord";
export interface Record {
    properties: PropertyRecord[];
}
export declare class Record {
    constructor(properties: PropertyRecord[]);
    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getPropertyRecord(name: string): PropertyRecord | undefined;
    /**
     * Create a Record from a valid json Record.
     * @param jsonModel
     */
    static createFromJson(jsonModel: any): Record;
}
