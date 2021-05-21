import { Record } from "./Record";
export interface PropertyRecord {
    name: string;
    value: any;
}
export interface PropertyRecord {
    name: string;
    value: any;
}
/**
 * @Property {id} - Name of the property
 */
export declare class PropertyRecord {
    name: string;
    value: any;
    constructor(name: string, value: any);
    getPropertyRecord(name: string): any;
}
export declare class EmbeddedPropertyRecord extends PropertyRecord {
    value: Record;
    constructor(name: string, value: Record);
    getPropertyRecord(name: string): PropertyRecord | undefined;
}
