import { SinglePropertyModel } from "./SinglePropertyModel";
import { EnumInput, getAutocompleteValuePosition } from "../../generators/forms/inputs/EnumInput";
import SingleEnumShow from "../../generators/fields/outputs/SingleEnumShow";
export class EnumSingleModel extends SinglePropertyModel {
    constructor(id, other) {
        super(id, other);
        this.options = other.options;
        this.colorMap = other.colorMap;
    }
    setInputField(props) {
        const { formValue, setFormValue, errors, options, value } = props;
        const valuePositionInOptions = getAutocompleteValuePosition(value, options);
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, inheritedValue: valuePositionInOptions, onChange: this.getInputOnChangeHandler({ formValue, setFormValue }) });
        return EnumInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
        };
    }
    setOutputField(props) {
        const { propertyRecord } = props;
        return SingleEnumShow({ propertyModel: this, propertyRecord, colorMap: this.colorMap });
    }
}
