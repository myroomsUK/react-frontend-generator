import { SinglePropertyModel } from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";
import { ListingOption } from "../listings/Listing";
import ReferenceInput from "../../generators/forms/inputs/ReferenceInput";
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
            console.log("vars", vars);
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value.toMap()));
            //   setFormValue({...formValue,[name]: parseInt(value.id)});
        };
    }
    setOutputField(props) {
        return ReferenceShow(Object.assign(Object.assign({}, props), { propertyModel: this }));
    }
    getRecord(record) {
        if (record) {
            return (record instanceof Map) ? record : parseInt(record.substring(record.lastIndexOf("/") + 1, record.length));
        }
        return record;
    }
    getFormValue(value) {
        return value;
    }
    getJsonFormValue(value) {
        return value.get("id");
    }
}
