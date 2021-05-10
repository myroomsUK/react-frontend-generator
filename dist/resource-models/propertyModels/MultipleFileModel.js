import { SinglePropertyModel } from "./SinglePropertyModel";
import FileListInput from "../../generators/forms/inputs/FileListInput";
import MultipleFileShow from "../../generators/fields/outputs/MultipleFileShow";
export class MultipleFileModel extends SinglePropertyModel {
    setInputField(props) {
        const { formValue, setFormValue, errors } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, resourceName: this.resourceName, onChange: this.getInputOnChangeHandler({ formValue, setFormValue }), files: formValue[this.id] });
        // @ts-ignore
        return FileListInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    getOutputField(props) {
        return MultipleFileShow(props);
    }
}
