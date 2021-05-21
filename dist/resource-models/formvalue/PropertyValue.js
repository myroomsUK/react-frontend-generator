import { FormValue } from "./FormValue";
/**
 * @Property {id} - Name of the property
 */
export class PropertyValue {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
export class EmbeddedSinglePropertyValue extends PropertyValue {
    constructor(name, value) {
        super(name, value);
        this.name = name;
        this.value = value;
    }
    createFromPropertyRecord(propertyRecord) {
        return new EmbeddedSinglePropertyValue(propertyRecord.name, FormValue.createFromRecord(propertyRecord.value));
    }
    getPropertyRecord(name) {
        //const record = this.value.getPropertyRecord(name);
        //return record
    }
}
export class EmbeddedMultiplePropertyValue extends PropertyValue {
    constructor(name, value) {
        super(name, value);
        this.name = name;
        this.value = value;
    }
    createFromPropertyRecord(propertyRecord) {
        return new EmbeddedMultiplePropertyValue(propertyRecord.name, propertyRecord.value.map((record) => FormValue.createFromRecord(record)));
    }
}
