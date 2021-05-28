import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import NumberShow from "../../generators/fields/outputs/NumberShow";
import NumberInput from "../../generators/forms/inputs/NumberInput";
import {InputOnChangeHandler} from "../PropertyModel";

export class NumberModel extends SinglePropertyModel{

    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        return NumberInput({...props, onClick:props.inputHandler});
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): (vars: any) => void {
        return (vars:any) => {
            const target = vars.target;
            let value = target.value;
            const name = target.name;
            console.log("formvalue in input", formValue)
            setFormValue( formValue.updateFormValue(name, parseInt(value)));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return NumberShow(props);
    }

    getRecord(jsonValue: any): any {
        return jsonValue
    }


}