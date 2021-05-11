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
        return (event) => {
            const target = event.target;
            let value = parseInt(target.value);
            const name = target.name;
            const id = target.id;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    getOutputField(props) {
        return ReferenceShow(props);
    }
}
