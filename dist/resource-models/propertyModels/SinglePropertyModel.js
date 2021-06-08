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
    getInputField(props, configuration) {
        const inputProps = new SingleInputProps(props);
        return this.setInputField(inputProps.handleForSet(), configuration);
    }
    getOutputField(props, configuration) {
        var _a;
        const inputProps = new SingleInputProps(props);
        return _jsxs(_Fragment, { children: [((_a = configuration === null || configuration === void 0 ? void 0 : configuration.showLabel) !== null && _a !== void 0 ? _a : true) && _jsx(Typography, { children: _.startCase(this.label) }, void 0), this.setOutputField(inputProps.handleForSet(), configuration)] }, void 0);
    }
    getFormValue(value) {
        return value;
    }
}
