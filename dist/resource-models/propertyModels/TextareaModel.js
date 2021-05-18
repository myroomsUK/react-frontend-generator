import { SinglePropertyModel } from "./SinglePropertyModel";
import { TextareaInput } from "../../generators/forms/inputs/TextareaInput";
import TextareaShow from "../../generators/fields/outputs/TextareaShow";
export class TextareaModel extends SinglePropertyModel {
    setInputField(props) {
        const { formValue, inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: inputHandler });
        return TextareaInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    setOutputField(props) {
        return TextareaShow(props);
    }
}
