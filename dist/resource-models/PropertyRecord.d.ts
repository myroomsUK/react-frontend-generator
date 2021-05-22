import { Record } from "./Record";
import { FormValue } from "./formvalue/FormValue";
export interface PropertyRecord {
    name: string;
    value: any;
    generatePropertyValue(): any;
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
export declare class EmbeddedSinglePropertyRecord extends PropertyRecord {
    value: Record;
    constructor(name: string, value: Record);
    getPropertyRecord(name: string): any;
    generatePropertyValue(): void;
}
export declare class EmbeddedMultiplePropertyRecord extends PropertyRecord {
    value: Record[];
    constructor(name: string, value: Record[]);
    generatePropertyValue(): Map<number, FormValue>;
}
