import {SinglePropertyModel} from "./SinglePropertyModel";
import PhoneInput from "../../generators/forms/inputs/PhoneInput";
import PhoneShow from "../../generators/fields/outputs/PhoneShow";

export class PhoneModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
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