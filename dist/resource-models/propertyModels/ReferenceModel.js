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
        const finalValue = (value) ? new ListingOption(value.get("id"), value.get(this.optionText)) : undefined;
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
    getRecord(jsonValue) {
        console.log("jsonvalue", jsonValue);
        return jsonValue;
    }
}
