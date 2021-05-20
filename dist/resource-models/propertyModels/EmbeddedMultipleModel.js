import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { IterableFormContent } from "../../generators/forms/IterableFormContent";
import { IterableShowContent } from "../../generators/fields/IterableShowContent";
export class EmbeddedMultipleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, form, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, single, modifyOnlyLastElement, modifyRule } = props;
        const setParentFormValue = (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [props.model.id]: values }));
        const newErrors = this.manipulateErrors(errors);
        return IterableFormContent({
            model: this.getResource().getModel(),
            resourceName: this.resourceName,
            setParentFormValue: setParentFormValue,
            formContent: this.form,
            referencesMap: referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            errors: newErrors,
            formValueArray: formValue[this.id],
            label: this.label,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
        });
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    setOutputField(props) {
        console.log("props", props, this.id);
        const { record, showElement } = props;
        return IterableShowContent({
            model: this.getResource().getModel(),
            record: record[this.id],
            resourceName: this.resourceName,
            showElement: showElement
        });
    }
}
