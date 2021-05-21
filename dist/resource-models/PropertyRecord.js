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
}
export class EmbeddedPropertyRecord extends PropertyRecord {
    constructor(name, value) {
        super(name, value);
        this.value = value;
    }
    getPropertyRecord(name) {
        return this.value.getPropertyRecord(name);
    }
}
