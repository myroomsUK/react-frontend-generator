import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import DateInput from "../../generators/forms/inputs/DateInput";
import DateShow from "../../generators/fields/outputs/DateShow";

export class DateModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel = {...props, model:this, onClick:inputHandler}
        return DateInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (event :any) => {
            const target = event.target;
            let value = target.value;
            const name = target.name;
            setFormValue({...formValue,[name]: value});
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return DateShow(props);
    }
}