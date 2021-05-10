import {SinglePropertyModel} from "./SinglePropertyModel";
import FileListInput from "../../generators/forms/inputs/FileListInput";
import MultipleFileShow from "../../generators/fields/outputs/MultipleFileShow";

export class MultipleFileModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, file:formValue[this.id]}

        return FileListInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue({...formValue, [name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return MultipleFileShow(props);
    }
}