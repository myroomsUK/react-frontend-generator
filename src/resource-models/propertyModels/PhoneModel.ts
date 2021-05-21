import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import PhoneInput from "../../generators/forms/inputs/PhoneInput";
import PhoneShow from "../../generators/fields/outputs/PhoneShow";
import {InputOnChangeHandler} from "../PropertyModel";

export class PhoneModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel = {...props, model:this, onClick:inputHandler}
        return PhoneInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return PhoneShow(props);
    }
}