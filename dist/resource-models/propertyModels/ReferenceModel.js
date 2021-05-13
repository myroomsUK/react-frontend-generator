import { AutocompleteInput } from "../../generators/forms/inputs/AutocompleteInput";
import { SinglePropertyModel } from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";
export class ReferenceModel extends SinglePropertyModel {
    constructor(id, other) {
        super(id, other);
    }
    setInputField(props) {
        const { inputHandler, value } = props;
        const propsWithModel = Object.assign(Object.assign({}, props), { onChange: inputHandler, inheritedValue: value });
        return AutocompleteInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: parseInt(value) }));
        };
    }
    getOutputField(props) {
        console.log(props);
        return ReferenceShow(Object.assign(Object.assign({}, props), { propertyModel: this }));
    }
}
