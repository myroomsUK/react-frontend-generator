import { jsx as _jsx } from "react/jsx-runtime";
import { SinglePropertyModel } from "./SinglePropertyModel";
import { EnumInput, getAutocompleteValuePosition } from "../../generators/forms/inputs/EnumInput";
import ChipGenerator from "../../generators/fields/outputs/chips/chipGenerator";
import { Record } from "../Record";
import ButtonsHorizontalList from "../../rendering/components/buttons/ButtonsHorizontalList";
export class EnumMultipleModel extends SinglePropertyModel {
    constructor(id, others) {
        super(id, others);
        this.options = others.options;
        this.colorMap = others.colorMap;
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
            setFormValue(formValue.updateFormValue(name, value));
        };
    }
    setOutputField(props) {
        const { propertyRecord } = props;
        const record = (propertyRecord === undefined) ? [] : (Array.isArray(propertyRecord) ? propertyRecord : Object.keys(propertyRecord));
        return _jsx(ButtonsHorizontalList, { children: record.map((singleRecord) => {
                const eachProp = Object.assign(Object.assign({}, props), { propertyRecord: singleRecord });
                return _jsx(ChipGenerator, { propertyModel: this, propertyRecord: singleRecord, colorMap: this.colorMap }, void 0);
            }) }, void 0);
    }
    getRecord(jsonValue) {
        return Record.createFromJsonNoModel(jsonValue);
    }
}
