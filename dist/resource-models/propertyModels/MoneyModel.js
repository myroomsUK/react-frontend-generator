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
            const [name, value] = vars;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    setOutputField(props) {
        return MoneyShow(props);
    }
}
