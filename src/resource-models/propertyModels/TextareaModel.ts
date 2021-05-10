import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import {TextareaInput} from "../../generators/forms/inputs/TextareaInput";
import TextareaShow from "../../generators/fields/outputs/TextareaShow";

export class TextareaModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {formValue, inputHandler} = props;
        const propsWithModel = {...props, model:this, onClick:inputHandler}
        return TextareaInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any)=>{
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue({...formValue, [name]:value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return TextareaShow(props);
    }

}