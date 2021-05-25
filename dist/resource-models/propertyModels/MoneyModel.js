import { SinglePropertyModel } from "./SinglePropertyModel";
import MoneyShow from "../../generators/fields/outputs/MoneyShow";
import MoneyInput from "../../generators/forms/inputs/MoneyInput";
export class MoneyModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: inputHandler });
        return MoneyInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        return MoneyShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
