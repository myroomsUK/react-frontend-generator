import {FormValue} from "./FormValue";
import {EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord, PropertyRecord} from "../PropertyRecord";
import {Record} from "../Record";

export interface PropertyValue{
  name:string;
  value: any
}

export interface PropertyValue{
    name:string;
    value: any;
}
/**
 * @Property {id} - Name of the property
 */
export class PropertyValue {
    name:string;
    value: any;

    constructor(name:string, value:any) {
        this.name = name;
        this.value = value
    }
}


export class EmbeddedSinglePropertyValue extends PropertyValue{
    value: FormValue;

    constructor(name:string, value:FormValue) {
        super(name, value);
        this.name = name;
        this.value = value
    }



}

export class EmbeddedMultiplePropertyValue extends PropertyValue{
    value: FormValue[];

    constructor(name:string, value:FormValue[]) {
        super(name, value);
        this.name = name;
        this.value = value
    }

}