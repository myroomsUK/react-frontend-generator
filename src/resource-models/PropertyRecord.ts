import {Record} from "./Record";
import {EmbeddedMultiplePropertyValue, EmbeddedSinglePropertyValue, PropertyValue} from "./formvalue/PropertyValue";
import {FormValue} from "./formvalue/FormValue";

export interface PropertyRecord{
  name:string;
  value: any;
  generatePropertyValue(): any;
}

export interface PropertyRecord{
    name:string;
    value: any;
}
/**
 * @Property {id} - Name of the property
 */
export class PropertyRecord {
    name:string;
    value: any;

    constructor(name:string, value:any) {
        this.name = name;
        this.value = value
    }

    getPropertyRecord(name:string){
        return this.value.getPropertyRecord(name);
    }

    generatePropertyValue(): any {
        return this.value
    }
}



export class EmbeddedSinglePropertyRecord extends PropertyRecord{
    value: Record;

    constructor(name:string, value:Record) {
        super(name, value);
        this.value = value;
    }

    getPropertyRecord(name:string){
        return this.value.getPropertyRecord(name)
    }

    generatePropertyValue(): FormValue {
        return this.value.generateFormValue()
    }
}

export class EmbeddedMultiplePropertyRecord extends PropertyRecord{
    value: Record[];

    constructor(name:string, value:Record[]) {
        super(name, value);
        this.value = value;
    }

    generatePropertyValue(): Map<number, FormValue> {
        const map = new Map();
        this.value.forEach((record, index) => map.set(index, FormValue.createFromRecord(record) ))
        return map;
    }

}