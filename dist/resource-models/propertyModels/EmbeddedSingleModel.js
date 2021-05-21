import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { EmbeddedFormContent } from "../../generators/forms/EmbeddedFormContent";
import { Record } from "../Record";
import { EmbeddedSinglePropertyRecord } from "../PropertyRecord";
import { EmbeddedShowContent } from "../../generators/fields/EmbeddedShowContent";
export class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler } = props;
        const setParentFormValue = (values) => setFormValue(formValue.updateFormValue(props.model.id, values));
        return EmbeddedFormContent({
            model: this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            formValue: formValue.get(this.id),
            errors: errors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler
        });
    }
    setOutputField(props) {
        var _a;
        const newProps = Object.assign(Object.assign({}, props), { record: (_a = props.record) !== null && _a !== void 0 ? _a : new EmbeddedSinglePropertyRecord(this.id, new Record([])) });
        return EmbeddedShowContent(newProps);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
}
