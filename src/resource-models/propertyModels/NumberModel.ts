import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import NumberShow from "../../generators/fields/outputs/NumberShow";
import NumberInput from "../../generators/forms/inputs/NumberInput";

export class NumberModel extends SinglePropertyModel{

    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        return NumberInput({...props, onClick:props.inputHandler});
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return (vars:any) => {
            const target = vars.target;
            let value = target.value;
            const name = target.name;
            setFormValue({...formValue, [name]: parseInt(value)});}
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return NumberShow(props);
    }


}