import { SinglePropertyModel } from "./SinglePropertyModel";
import SingleFileInput from "../../generators/forms/inputs/SingleFileInput";
import SingleFileShow from "../../generators/fields/outputs/SingleFileShow";
export class SingleFileModel extends SinglePropertyModel {
    setInputField(props) {
        const { formValue, inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, file: formValue.get(this.id) });
        // @ts-ignore
        return SingleFileInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        return SingleFileShow(props);
    }
}
