import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import PhoneInput from "../../generators/forms/inputs/PhoneInput";
import PhoneShow from "../../generators/fields/outputs/PhoneShow";

export class PhoneModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel = {...props, model:this, onClick:inputHandler}
        return PhoneInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue({...formValue, [name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return PhoneShow(props);
    }
}