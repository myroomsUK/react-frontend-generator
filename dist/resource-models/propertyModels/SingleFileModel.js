import { SinglePropertyModel } from "./SinglePropertyModel";
import SingleFileInput from "../../generators/forms/inputs/SingleFileInput";
import SingleFileShow from "../../generators/fields/outputs/SingleFileShow";
export class SingleFileModel extends SinglePropertyModel {
    setInputField(props) {
        const { formValue, inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, file: formValue[this.id] });
        // @ts-ignore
        return SingleFileInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    setOutputField(props) {
        return SingleFileShow(props);
    }
}
