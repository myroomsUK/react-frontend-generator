/**
 * @Property {id} - Name of the property
 */
export class PropertyRecord {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    getPropertyRecord(name) {
        return this.value.getPropertyRecord(name);
    }
    generatePropertyValue() {
        return this.value;
    }
}
export class EmbeddedSinglePropertyRecord extends PropertyRecord {
    constructor(name, value) {
        super(name, value);
        this.value = value;
    }
    getPropertyRecord(name) {
        return this.value.getPropertyRecord(name);
    }
    generatePropertyValue() {
    }
}
export class EmbeddedMultiplePropertyRecord extends PropertyRecord {
    constructor(name, value) {
        super(name, value);
        this.value = value;
    }
    generatePropertyValue() {
        const map = new Map();
        //this.value.forEach((record, index) => map.set(index, FormValue.createFromRecord(record) ))
        return map;
    }
}
