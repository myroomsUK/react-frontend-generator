import {StringInput} from "../../generators/forms/inputs/StringInput";
import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import StringShow from "../../generators/fields/outputs/StringShow";


export class StringModel extends SinglePropertyModel{

    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel: StringInput = {...props, onClick:inputHandler}
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