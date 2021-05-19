import NestedFormContent from "../../generators/forms/NestedFormContent";
import { NestedPropertyModel } from "./NestedPropertyModel";
import { ShowContent } from "../../generators/fields/ShowContent";
export class EmbeddedSingleModel extends NestedPropertyModel {
    setOutputField(props) {
        const newProps = Object.assign(Object.assign({}, props), { model: this.getResource().getModel(), resourceName: this.getResource().resourceName });
        return ShowContent(newProps);
    }
    setInputField(props) {
        const { formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler } = props;
        const setParentFormValue = (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [this.resourceName]: values }));
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
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
}
