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
    getOutputField(props, outputElement = undefined) {
        const { showLabel } = props;
        const newProps = Object.assign(Object.assign({}, props), { model: this.getResource().getModel(), showElement: outputElement });
        return _jsxs(_Fragment, { children: [showLabel && _jsx(Typography, { children: _.startCase(this.label) }, void 0), this.setOutputField(newProps)] }, void 0);
    }
}
