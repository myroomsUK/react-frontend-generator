import { Resource } from "./Resource";
import _ from "lodash";
import { PropertyModelCore } from "./PropertyModelCore";
import { EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, REFERENCE } from "../generators/forms/inputs/InputTypes";
/**
 * @Property {id} - Name of the property
 */
export class PropertyModel {
    constructor(id, rest) {
        const { type, label, validators = [], errorMessages = [], resourceName, optionText, single, resource, form, options, xs = 12, md = 6, adornment, showElement, modifyOnlyLastElement = false, editabilityRule = (() => { return true; }), write = false, read = false, listValue, listDataTransformer } = rest;
        this.id = id;
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
    }
    static get(id, others) {
        return new PropertyModel(id, others);
    }
    static createReferenceElement(name, resourceName) {
        return new PropertyModel(name, new PropertyModelCore({ type: REFERENCE, resourceName: resourceName }));
    }
    addPropertiesToRequestedElement(propertiesObject, resourceName) {
        return _.merge(propertiesObject, this);
    }
    getResource() {
        if (this.isNested() && this.resource !== undefined)
            return this.resource;
        throw new Error("Accessing inexistent resource");
    }
    isNested() {
        return [EMBEDDED_SINGLE, EMBEDDED_MULTIPLE].includes(this.type);
    }
}
