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
        // @ts-ignore
        const finalValue = (value) ? (typeof value === "number" ? new ListingOption(value, "") : new ListingOption(value["id"], "")) : undefined;
        const propsWithModel = Object.assign(Object.assign({}, props), { model: this, onChange: inputHandler, inheritedValue: finalValue });
        return ReferenceInput(propsWithModel);
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const [name, value] = vars;
            setFormValue(formValue.updateFormValue(name, value["id"]));
        };
    }
    setOutputField(props) {
        return ReferenceShow(props);
    }
    getRecord(record) {
        if (record) {
            if (record instanceof Map) {
                return record;
            }
            else if (typeof record === "object") {
                /*console.log("it is an object")*/
                return Record.createFromJsonNoModel(record);
            }
            else if (typeof record === "number") {
                /*console.log("it is a number")*/
                return record;
            }
            else {
                /*console.log("it's something else")*/
                return parseInt(record.substring(record.lastIndexOf("/") + 1, record.length));
            }
        }
    }
    getFormValue(value) {
        return value;
    }
    getJsonFormValue(value) {
        if (value instanceof Map) {
            return value.get("id");
        }
        else {
            return value;
        }
    }
}
