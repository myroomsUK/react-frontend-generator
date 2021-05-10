import {SinglePropertyModel} from "./SinglePropertyModel";
import DateInput from "../../generators/forms/inputs/DateInput";
import DateShow from "../../generators/fields/outputs/DateShow";

export class DateModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
        return DateInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue({...formValue,[name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return DateShow(props);
    }
}