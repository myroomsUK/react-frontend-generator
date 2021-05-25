import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { IterableFormContent } from "../../generators/forms/IterableFormContent";
import { IterableShowContent } from "../../generators/fields/IterableShowContent";
import { Record } from "../Record";
import { FormValue } from "../formvalue/FormValue";
export class EmbeddedMultipleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, inputElement, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, modifyOnlyLastElement, modifyRule } = props;
        const setParentFormValue = (values) => setFormValue(formValue.updateFormValue(props.model.id, values));
        const newErrors = this.manipulateErrors(errors);
        return IterableFormContent({
            model: this.getResource().getModel(),
            resourceName: this.resourceName,
            setParentFormValue: setParentFormValue,
            formContent: this.form,
            referencesMap: referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            errors: newErrors,
            formValueArray: formValue.get(this.id),
            label: this.label,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
            inputElement
        });
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    setOutputField(props) {
        const { record, model, showElement } = props;
        return IterableShowContent({
            model: model,
            record: record !== null && record !== void 0 ? record : new Map(),
            resourceName: this.resourceName,
            showElement: showElement
        });
    }
    getRecord(jsonValue) {
        Array.isArray(jsonValue);
        const map = new Map();
        jsonValue.forEach((element, index) => {
            if (typeof element === "object") {
                return map.set(index, Record.createFromJson(element, this.getResource().getModel()));
            }
            else {
                map.set(index, element);
            }
        });
        return map;
    }
    getFormValue(value) {
        const map = new Map();
        const nestedEntries = Array.from(value.entries());
        nestedEntries.forEach(([nestedKey, nestedValue], nestedIndex) => {
            if (typeof nestedValue === "object") {
                map.set(nestedKey, FormValue.createFromRecord(nestedValue, this.getResource().getModel()));
            }
            else {
                map.set(nestedKey, nestedValue);
            }
        });
        return map;
    }
    getJsonFormValue(value) {
        return Array.from(value.values()).map((item) => {
            if (item instanceof FormValue) {
                return item.toJson(this.getResource().getModel());
            }
            else {
                return item;
            }
        });
    }
}
