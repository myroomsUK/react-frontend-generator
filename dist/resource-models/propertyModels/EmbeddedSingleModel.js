import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { ShowContent } from "../../generators/fields/ShowContent";
import { EmbeddedFormContent } from "../../generators/forms/EmbeddedFormContent";
import { Record } from "../Record";
import { EmbeddedPropertyRecord } from "../PropertyRecord";
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
        var _a;
        const newProps = Object.assign(Object.assign({}, props), { record: (_a = props.record) !== null && _a !== void 0 ? _a : new EmbeddedPropertyRecord(this.id, new Record([])) });
        return ShowContent(newProps);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return function (p1) {
        };
    }
}
