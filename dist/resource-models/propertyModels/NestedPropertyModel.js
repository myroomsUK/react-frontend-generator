import { PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
export class NestedPropertyModel extends PropertyModel {
    constructor(id, others) {
        super(id, others);
        this.resourceName = others.resourceName;
        this.resource = new Resource(others.resource);
    }
    getResource() {
        return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }
    manipulateErrors(fetchErrors) {
        return fetchErrors.nestedSingleErrorExtrapolator(this.id);
    }
    getInputField(props) {
        const { errors, formValue, setFormValue } = props;
        const nestedErrors = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({ formValue, setFormValue });
        const newProps = Object.assign(Object.assign({}, props), { errors: nestedErrors, inputHandler: inputHandler, value: formValue[this.id], model: this });
        return this.setInputField(newProps);
    }
}
