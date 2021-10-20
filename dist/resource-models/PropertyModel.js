import _ from "lodash";
/**
 * @Property {id} - Name of the property
 */
export class PropertyModel {
    constructor(id, rest) {
        const { type, filterType, label, validators = [], errorMessages = [], resourceName, optionText, form, xs = 12, md = 6, write = false, read = false, colorMap, modelResourceName } = rest;
        this.id = id;
        this.type = type;
        this.filterType = filterType;
        this.label = _.startCase(label);
        this.validators = validators;
        this.errorMessages = errorMessages;
        this.resourceName = resourceName;
        this.optionText = optionText;
        this.form = form;
        this.xs = xs;
        this.md = md;
        this.write = write;
        this.read = read;
        this.colorMap = colorMap;
        this.modelResourceName = modelResourceName;
    }
    getPropertyField(props, isEdit = true) {
        return (isEdit) ? this.getInputField(props) : this.getOutputField(props);
    }
}
