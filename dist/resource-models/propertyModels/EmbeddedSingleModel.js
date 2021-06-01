import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { EmbeddedFormContent } from "../../generators/forms/EmbeddedFormContent";
import { Record } from "../Record";
import { EmbeddedShowContent } from "../../generators/fields/EmbeddedShowContent";
import { FormValue } from "../formvalue/FormValue";
export class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, record } = props;
        const setParentFormValue = (values) => setFormValue(formValue.updateFormValue(props.model.id, values));
        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue();
        return EmbeddedFormContent({
            model: this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue: setParentFormValue,
            refreshReferencesMap: refreshReferencesMap,
            referencesMap: referencesMap,
            formValue: finalFormValue,
            errors: errors,
            partialSubmitHandler: partialSubmitHandler,
            submitHandler: submitHandler,
            record: record !== null && record !== void 0 ? record : new Record()
        });
    }
    setOutputField(props) {
        var _a;
        const newProps = Object.assign(Object.assign({}, props), { record: (_a = props.record) !== null && _a !== void 0 ? _a : new Record() });
        return EmbeddedShowContent(newProps);
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
    getJsonFormValue(value) {
        return value.toJson();
    }
}
