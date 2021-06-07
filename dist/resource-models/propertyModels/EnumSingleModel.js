import { jsx as _jsx } from "react/jsx-runtime";
import { SinglePropertyModel } from "./SinglePropertyModel";
import { EnumInput, getAutocompleteValuePosition } from "../../generators/forms/inputs/EnumInput";
import { Record } from "../Record";
import ChipGenerator from "../../generators/fields/outputs/chips/chipGenerator";
export class EnumSingleModel extends SinglePropertyModel {
    constructor(id, other) {
        super(id, other);
        this.options = other.options;
        this.colorMap = other.colorMap;
    }
    setInputField(props) {
        const { formValue, setFormValue, errors, value } = props;
        const valuePositionInOptions = (value !== undefined) ? getAutocompleteValuePosition(value, this.options) : -1;
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
        return _jsx(ChipGenerator, { propertyModel: this, propertyRecord: propertyRecord, colorMap: this.colorMap }, void 0);
    }
    getRecord(jsonValue) {
        return Record.createFromJsonNoModel(jsonValue);
    }
}
