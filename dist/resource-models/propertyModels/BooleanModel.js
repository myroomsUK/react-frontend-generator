import { SinglePropertyModel } from "./SinglePropertyModel";
import BooleanInput from "../../generators/forms/inputs/BooleanInput";
import BooleanShow from "../../generators/fields/outputs/BooleanShow";
export class BooleanModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler, formValue } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { onClick: inputHandler, checked: formValue.get(this.id) });
        return BooleanInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (event) => {
            const target = event.target;
            let value = target.checked;
            const name = target.id;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        return BooleanShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
