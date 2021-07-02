import { SinglePropertyModel } from "./SinglePropertyModel";
import FileListInput from "../../generators/forms/inputs/FileListInput";
import MultipleFileShow from "../../generators/fields/outputs/MultipleFileShow";
import { Record } from "../Record";
export class MultipleFileModel extends SinglePropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, errors } = props;
        // @ts-ignore
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, modelResourceName: this.modelResourceName, onChange: this.getInputOnChangeHandler({ formValue, setFormValue }), files: formValue[this.id] });
        // @ts-ignore
        return FileListInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        var _a;
        return MultipleFileShow(Object.assign(Object.assign({}, props), { record: (_a = props.record) !== null && _a !== void 0 ? _a : new Map() }));
    }
    getRecord(jsonValue) {
        return Record.createFromJsonNoModel(jsonValue);
    }
}
