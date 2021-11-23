import {SinglePropertyModel} from "./SinglePropertyModel";
import {TextareaInput} from "../../generators/forms/inputs/TextareaInput";
import TextareaShow from "../../generators/fields/outputs/TextareaShow";
import {InputOnChangeHandler} from "../PropertyModel";
import {SingleSetInputFieldProps} from "../models/SetInputFieldProps";

export class TextareaModel extends SinglePropertyModel{
    setInputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null {
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler(props)}
        return TextareaInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (value:any)=>setFormValue( formValue.updateFormValue(this.id, value));
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return TextareaShow(props);
    }

    getRecord(jsonValue: any): any {
        return jsonValue
    }

}
