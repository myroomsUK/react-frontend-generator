import { SinglePropertyModel } from "./SinglePropertyModel";
import DateInput from "../../generators/forms/inputs/DateInput";
import DateShow from "../../generators/fields/outputs/DateShow";
export class DateModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onClick: inputHandler });
        return DateInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (event) => {
            const target = event.target;
            let value = target.value;
            const name = target.name;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        return DateShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
