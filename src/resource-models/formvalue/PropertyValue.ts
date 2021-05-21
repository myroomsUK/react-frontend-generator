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

    createFromPropertyRecord(propertyRecord: EmbeddedSinglePropertyRecord): EmbeddedSinglePropertyValue{
        return new EmbeddedSinglePropertyValue(propertyRecord.name, FormValue.createFromRecord(propertyRecord.value))
    }

    getPropertyRecord(name:string){

        //const record = this.value.getPropertyRecord(name);

        //return record
    }
}

export class EmbeddedMultiplePropertyValue extends PropertyValue{
    value: FormValue[];

    constructor(name:string, value:FormValue[]) {
        super(name, value);
        this.name = name;
        this.value = value
    }

    createFromPropertyRecord(propertyRecord: EmbeddedMultiplePropertyRecord):EmbeddedMultiplePropertyValue{
        return new EmbeddedMultiplePropertyValue(propertyRecord.name, propertyRecord.value.map((record:Record) => FormValue.createFromRecord(record)));
    }

}