import { NestedPropertyModel } from "./NestedPropertyModel";
import IterableFormContent from "../../generators/forms/IterableFormContent";
import { IterableShowContent } from "../../generators/fields/IterableShowContent";
export class EmbeddedMultipleModel extends NestedPropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, form, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, single, modifyOnlyLastElement, modifyRule } = props;
        const setParentFormValue = (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [props.model.id]: values }));
        const newErrors = this.manipulateErrors(errors);
        return IterableFormContent({
            model: this.getResource().getModel(),
            resourceName: this.resourceName,
            form: form,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            errors: newErrors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler,
            formValueArray: formValue[this.id],
            single: single,
            resource: this.getResource(),
            label: this.label,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
            parentFormValue: formValue
        });
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
    setOutputField(props) {
        return IterableShowContent({
            model: this.getResource().getModel(),
            record: props.propertyRecord,
            resourceName: this.resourceName,
            showElement: this.showElement
        });
    }
}
