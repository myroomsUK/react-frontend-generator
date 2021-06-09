import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { EmbeddedFormContent } from "../../generators/forms/EmbeddedFormContent";
import { Record } from "../Record";
import { EmbeddedShowContent } from "../../generators/fields/EmbeddedShowContent";
import { FormValue } from "../formvalue/FormValue";
import { EmbeddedSingleInputProps } from "../models/InputProps";
import { Typography } from "@material-ui/core";
import _ from "lodash";
export class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props, configuration) {
        const { formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, record, refresh } = props;
        const setParentFormValue = (values) => setFormValue(formValue.updateFormValue(props.model.id, values));
        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue();
        return EmbeddedFormContent({
            model: this.getResource().getModel(),
            formContent: configuration === null || configuration === void 0 ? void 0 : configuration.viewElement,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            formValue: finalFormValue,
            errors: errors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler,
            record: record !== null && record !== void 0 ? record : new Record(),
            refresh: refresh
        });
    }
    getInputField(props, configuration) {
        const newProps = new EmbeddedSingleInputProps(props);
        return this.setInputField(newProps.handleForSet(), configuration);
    }
    getOutputField(props, configuration) {
        var _a;
        const showLabel = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.showLabel) !== null && _a !== void 0 ? _a : true;
        const newProps = new EmbeddedSingleInputProps(props);
        return _jsxs(_Fragment, { children: [showLabel && _jsx(Typography, { children: _.startCase(this.label) }, void 0), this.setOutputField(newProps, configuration)] }, void 0);
    }
    setOutputField(props, configuration) {
        const { formValue, refreshReferencesMap, referencesMap, setFormValue, errors, lockedFormValue, partialSubmitHandler, submitHandler, record, refresh } = props;
        const setParentFormValue = (values) => setFormValue(formValue.updateFormValue(props.model.id, values));
        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue();
        return _jsx(_Fragment, { children: EmbeddedShowContent({
                model: this.getResource().getModel(),
                formContent: configuration === null || configuration === void 0 ? void 0 : configuration.viewElement,
                showElement: configuration === null || configuration === void 0 ? void 0 : configuration.viewElement,
                setFormValue: setParentFormValue,
                lockedFormValue: lockedFormValue,
                refreshReferencesMap: refreshReferencesMap,
                referencesMap: referencesMap,
                formValue: finalFormValue,
                errors: errors,
                partialSubmitHandler: partialSubmitHandler,
                submitHandler: submitHandler,
                record: record !== null && record !== void 0 ? record : new Record(),
                refresh: refresh
            }) }, void 0);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    getRecord(jsonValue) {
        return Record.createFromJson(jsonValue, this.getResource().getModel());
    }
    getFormValue(value) {
        return FormValue.createFromRecord(value, this.getResource().getModel());
    }
}
