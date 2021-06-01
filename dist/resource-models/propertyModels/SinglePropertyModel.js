import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { PropertyModel } from "../PropertyModel";
import { Typography } from "@material-ui/core";
import _ from 'lodash';
export class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors) {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return { errorMessage, hasError };
    }
    getInputField(props) {
        const { errors, formValue, setFormValue } = props;
        const { hasError, errorMessage } = this.manipulateErrors(errors);
        const label = _.startCase(this.label);
        const inputHandler = this.getInputOnChangeHandler({ formValue, setFormValue });
        // @ts-ignore
        const value = (formValue) ? formValue[this.id] : undefined;
        const newProps = Object.assign(Object.assign({}, props), { hasError, errorMessage, inputHandler: inputHandler, value: value, label: label });
        return this.setInputField(newProps);
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
