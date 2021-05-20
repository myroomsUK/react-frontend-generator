import NestedFormContent from "../../generators/forms/NestedFormContent";
import React from "react";
import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { ShowContent } from "../../generators/fields/ShowContent";
export class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, form, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler } = props;
        const setParentFormValue = (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [this.resourceName]: values }));
        if (form) {
            return React.cloneElement(form, props);
        }
        return NestedFormContent({
            model: this.getResource().getModel(),
            form: this.form,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            formValue: formValue,
            errors: errors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler
        });
    }
    setOutputField(props) {
        const { showElement, model, record } = props;
        if (showElement) {
            const props = { model: model, record };
            return React.cloneElement(showElement, props);
        }
        const newProps = Object.assign(Object.assign({}, props), { model: this.getResource().getModel() });
        return ShowContent(newProps);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
}
