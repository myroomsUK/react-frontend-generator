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
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: parseFloat(value) }));
        };
    }
    getOutputField(props) {
        return FloatShow(props);
    }
}
