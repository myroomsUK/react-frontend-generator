import { SinglePropertyModel } from "./SinglePropertyModel";
import { FloatInput } from "../../generators/forms/inputs/FloatInput";
import { FloatShow } from "../../generators/fields/outputs/FloatShow";
export class FloatModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: inputHandler });
        return FloatInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [event] = vars;
            const target = event.target;
            let value = target.value;
            const name = target.id;
            setFormValue(formValue.updateFormValue(name, parseFloat(value)));
        };
    }
    setOutputField(props) {
        return FloatShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
