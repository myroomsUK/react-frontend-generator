import {StringInput} from "../../generators/forms/inputs/StringInput";
import {SinglePropertyModel} from "./SinglePropertyModel";
import StringShow from "../../generators/fields/outputs/StringShow";
import {InputField} from "../PropertyModel";


export class StringModel extends SinglePropertyModel{


    getInputField(props: InputField): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel: StringInput = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
        return StringInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}:any){
        return (vars:any)=>{
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue({...formValue, [name]:value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return StringShow(props);
    }

}