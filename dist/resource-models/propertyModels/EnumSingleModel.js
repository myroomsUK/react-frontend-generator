import { SinglePropertyModel } from "./SinglePropertyModel";
import { EnumInput, getAutocompleteValuePosition } from "../../generators/forms/inputs/EnumInput";
import SingleEnumShow from "../../generators/fields/outputs/SingleEnumShow";
import { Record } from "../Record";
export class EnumSingleModel extends SinglePropertyModel {
    constructor(id, other) {
        super(id, other);
        this.options = other.options;
        this.colorMap = other.colorMap;
    }
    setInputField(props) {
        const { formValue, setFormValue, errors, value } = props;
        const valuePositionInOptions = (value) ? getAutocompleteValuePosition(value, this.options) : -1;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, inheritedValue: valuePositionInOptions, onChange: this.getInputOnChangeHandler({ formValue, setFormValue }) });
        return EnumInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        const { propertyRecord } = props;
        return SingleEnumShow({ propertyModel: this, propertyRecord, colorMap: this.colorMap });
    }
    getRecord(jsonValue) {
        return Record.createFromJsonNoModel(jsonValue);
    }
}
