import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { ShowContent } from "../../generators/fields/ShowContent";
import { EmbeddedFormContent } from "../../generators/forms/EmbeddedFormContent";
export class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler } = props;
        const setParentFormValue = (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [props.model.id]: values }));
        return EmbeddedFormContent({
            model: this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            formValue: formValue[this.id],
            errors: errors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler
        });
    }
    setOutputField(props) {
        const newProps = Object.assign(Object.assign({}, props), { model: this.getResource().getModel() });
        return ShowContent(newProps);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
}
