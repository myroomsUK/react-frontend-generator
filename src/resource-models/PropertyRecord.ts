import {Record} from "./Record";

export interface PropertyRecord{
  name:string;
  value: any
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
}



export class EmbeddedPropertyRecord extends PropertyRecord{
    value: Record;

    constructor(name:string, value:Record) {
        super(name, value);
        this.value = value;
    }

    getPropertyRecord(name:string){
        return this.value.getPropertyRecord(name);
    }
}