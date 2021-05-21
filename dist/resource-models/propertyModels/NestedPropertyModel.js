import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
import { Typography } from "@material-ui/core";
import _ from "lodash";
export class EmbeddedPropertyModel extends PropertyModel {
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
        const model = this;
        model.label = _.startCase(this.label);
        const nestedErrors = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({ formValue, setFormValue });
        const newProps = Object.assign(Object.assign({}, props), { errors: nestedErrors, inputHandler: inputHandler, value: formValue[this.id], model: model });
        return this.setInputField(newProps);
    }
    getOutputField(props) {
        const { showLabel, record } = props;
        const newProps = Object.assign(Object.assign({}, props), { model: this.getResource().getModel() });
        return _jsxs(_Fragment, { children: [showLabel && _jsx(Typography, { children: _.startCase(this.label) }, void 0), this.setOutputField(newProps)] }, void 0);
    }
}
