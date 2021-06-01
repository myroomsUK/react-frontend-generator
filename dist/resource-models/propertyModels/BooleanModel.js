import { SinglePropertyModel } from "./SinglePropertyModel";
import BooleanInput from "../../generators/forms/inputs/BooleanInput";
import BooleanShow from "../../generators/fields/outputs/BooleanShow";
export class BooleanModel extends SinglePropertyModel {
    setInputField(props) {
        var _a;
        const { inputHandler, formValue } = props;
        // @ts-ignore
        const propsWithModel = Object.assign(Object.assign({}, props), { onClick: inputHandler, checked: (_a = formValue[this.id]) !== null && _a !== void 0 ? _a : false });
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
