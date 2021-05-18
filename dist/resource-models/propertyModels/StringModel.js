import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { StringInput } from "../../generators/forms/inputs/StringInput";
import { SinglePropertyModel } from "./SinglePropertyModel";
import StringShow from "../../generators/fields/outputs/StringShow";
export class StringModel extends SinglePropertyModel {
    setInputField(props) {
        const { inputHandler } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { onClick: inputHandler });
        return StringInput(propsWithModel);
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
        return _jsx(_Fragment, { children: _jsx(StringShow, Object.assign({}, props), void 0) }, void 0);
    }
}
