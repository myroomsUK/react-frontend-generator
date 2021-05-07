import { Resource } from "./Resource";
export class PropertyModelCore {
    constructor({ type, label, validators = [], errorMessages = [], resourceName, optionText, single, resource, form, options, xs = 12, md = 6, adornment, showElement, modifyOnlyLastElement = false, editabilityRule, write = false, read = false, listValue, listDataTransformer, areImages }) {
        this.type = type;
        this.label = label;
        this.validators = validators;
        this.errorMessages = errorMessages;
        this.resourceName = resourceName;
        this.optionText = optionText;
        this.single = single;
        this.resource = resource ? new Resource(resource) : undefined;
        this.form = form;
        this.options = options;
        this.xs = xs;
        this.md = md;
        this.adornment = adornment;
        this.showElement = showElement;
        this.modifyOnlyLastElement = modifyOnlyLastElement;
        this.editabilityRule = editabilityRule;
        this.write = write;
        this.read = read;
        this.listValue = listValue;
        this.listDataTransformer = listDataTransformer;
        this.areImages = areImages;
    }
}
