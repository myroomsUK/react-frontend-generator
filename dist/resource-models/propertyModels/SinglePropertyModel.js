import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { PropertyModel } from "../PropertyModel";
import { Typography } from "@material-ui/core";
import _ from 'lodash';
import { SingleInputProps } from "../models/InputProps";
export class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors) {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return { errorMessage, hasError };
    }
    getInputField(props) {
        const inputProps = new SingleInputProps(props);
        return this.setInputField(inputProps.handleForSet());
    }
    getOutputField(props) {
        const { record, showLabel } = props;
        // @ts-ignore
        const newProps = Object.assign(Object.assign({}, props), { propertyRecord: this.getRecord(record) });
        return _jsxs(_Fragment, { children: [showLabel && _jsx(Typography, { children: _.startCase(this.label) }, void 0), this.setOutputField(newProps)] }, void 0);
    }
    getFormValue(value) {
        return value;
    }
    getJsonFormValue(value) {
        return value;
    }
}
