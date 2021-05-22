import { FormValue } from "./FormValue";
export interface PropertyValue {
    name: string;
    value: any;
}
export interface PropertyValue {
    name: string;
    value: any;
}
/**
 * @Property {id} - Name of the property
 */
export declare class PropertyValue {
    name: string;
    value: any;
    constructor(name: string, value: any);
}
export declare class EmbeddedSinglePropertyValue extends PropertyValue {
    value: FormValue;
    constructor(name: string, value: FormValue);
}
export declare class EmbeddedMultiplePropertyValue extends PropertyValue {
    value: FormValue[];
    constructor(name: string, value: FormValue[]);
}
