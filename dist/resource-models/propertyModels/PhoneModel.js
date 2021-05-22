import { SinglePropertyModel } from "./SinglePropertyModel";
import PhoneInput from "../../generators/forms/inputs/PhoneInput";
import PhoneShow from "../../generators/fields/outputs/PhoneShow";
export class PhoneModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: inputHandler });
        return PhoneInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        return PhoneShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
