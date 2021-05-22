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
}
export class EmbeddedMultiplePropertyValue extends PropertyValue {
    constructor(name, value) {
        super(name, value);
        this.name = name;
        this.value = value;
    }
}
