import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { PropertyModel } from "../PropertyModel";
import React from "react";
export class IdModel extends PropertyModel {
    setInputField(props) {
        return _jsx(_Fragment, {}, void 0);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    setOutputField(props) {
        return _jsx(_Fragment, { children: props.record }, void 0);
    }
    manipulateErrors(errors) {
    }
    getInputField(props) {
        return null;
    }
    getOutputField(props, { viewElement }) {
        if (viewElement) {
            return React.cloneElement(viewElement, props);
        }
        return this.setOutputField(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
    getFormValue(value) {
        return value;
    }
    getJsonFormValue(value) {
        return value;
    }
}
