import { SinglePropertyModel } from "./SinglePropertyModel";
import { TextareaInput } from "../../generators/forms/inputs/TextareaInput";
import TextareaShow from "../../generators/fields/outputs/TextareaShow";
export class TextareaModel extends SinglePropertyModel {
    setInputField(props) {
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: this.getInputOnChangeHandler(props) });
        return TextareaInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (value) => setFormValue(formValue.updateFormValue(this.id, value));
    }
    setOutputField(props) {
        return TextareaShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
