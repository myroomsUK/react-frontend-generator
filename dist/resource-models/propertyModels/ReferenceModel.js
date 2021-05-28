import { SinglePropertyModel } from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";
import { ListingOption } from "../listings/Listing";
import ReferenceInput from "../../generators/forms/inputs/ReferenceInput";
import { Record } from "../Record";
export class ReferenceModel extends SinglePropertyModel {
    constructor(id, other) {
        super(id, other);
    }
    setInputField(props) {
        const { inputHandler, value } = props;
        const finalValue = (value) ? (typeof value === "number" ? new ListingOption(value, "") : new ListingOption(value.get("id"), "")) : undefined;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onChange: inputHandler, inheritedValue: finalValue });
        return ReferenceInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value.toMap()));
        };
    }
    setOutputField(props) {
        return ReferenceShow(Object.assign(Object.assign({}, props), { propertyModel: this }));
    }
    getRecord(record) {
        if (record) {
            if (record instanceof Map) {
                return record;
            }
            else if (typeof record === "object") {
                return Record.createFromJsonNoModel(record);
            }
            else {
                return parseInt(record.substring(record.lastIndexOf("/") + 1, record.length));
            }
        }
    }
    getFormValue(value) {
        return value;
    }
    getJsonFormValue(value) {
        return value.get("id");
    }
}
