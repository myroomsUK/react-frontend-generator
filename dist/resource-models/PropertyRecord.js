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
export class EmbeddedSinglePropertyRecord extends PropertyRecord {
    constructor(name, value) {
        super(name, value);
        this.value = value;
    }
    getPropertyRecord(name) {
        console.log("record", this);
        console.log("name", name);
        const record = this.value.getPropertyRecord(name);
        console.log("record found", record);
        return record;
    }
}
export class EmbeddedMultiplePropertyRecord extends PropertyRecord {
    constructor(name, value) {
        super(name, value);
        this.value = value;
    }
}
