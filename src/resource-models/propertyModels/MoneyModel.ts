import {SinglePropertyModel} from "./SinglePropertyModel";
import MoneyInput from "../../generators/forms/inputs/MoneyInput";
import MoneyShow from "../../generators/fields/outputs/MoneyShow";

export class MoneyModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
        return MoneyInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue({...formValue, [name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return MoneyShow(props);
    }


}