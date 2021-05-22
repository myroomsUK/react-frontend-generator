import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { PropertyModel } from "../PropertyModel";
export class IdModel extends PropertyModel {
    setInputField(props) {
        return _jsx(_Fragment, {}, void 0);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    setOutputField(props) {
        return _jsx(_Fragment, { children: props.propertyRecord }, void 0);
    }
    manipulateErrors(errors) {
    }
    getInputField(props) {
        return null;
    }
    getOutputField(props) {
        return null;
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
