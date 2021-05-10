/**
 * @Property {id} - Name of the property
 */
export class PropertyModel {
    constructor(id, rest) {
        const { type, label, validators = [], errorMessages = [], resourceName, optionText, form, xs = 12, md = 6, write = false, read = false } = rest;
        this.id = id;
        this.type = type;
        this.label = label;
        this.validators = validators;
        this.errorMessages = errorMessages;
        this.resourceName = resourceName;
        this.optionText = optionText;
        this.form = form;
        this.xs = xs;
        this.md = md;
        this.write = write;
        this.read = read;
    }
}
