import {SinglePropertyModel} from "./SinglePropertyModel";
import {FloatInput} from "../../generators/forms/inputs/FloatInput";
import {FloatShow} from "../../generators/fields/outputs/FloatShow";

export class FloatModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        console.log("formvalue", formValue);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
        return FloatInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [event] = vars;
            const target = event.target;
            let value = target.value;
            const name = target.id;

            setFormValue({...formValue, [name]: parseFloat(value)});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return FloatShow(props);
    }
}