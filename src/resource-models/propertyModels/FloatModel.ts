import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import {FloatInput} from "../../generators/forms/inputs/FloatInput";
import {FloatShow} from "../../generators/fields/outputs/FloatShow";
import {InputOnChangeHandler} from "../PropertyModel";

export class FloatModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel = {...props, model:this, onClick:inputHandler}
        return FloatInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (vars:any) => {
            const [event] = vars;
            const target = event.target;
            let value = target.value;
            const name = target.id;
            setFormValue( formValue.updateFormValue(name, parseFloat(value)));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return FloatShow(props);
    }
}