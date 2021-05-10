import {SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import chipGenerator from "../../generators/fields/outputs/chips/chipGenerator";

export class EnumSingleModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors, options} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const value = formValue[this.id];
        const valuePositionInOptions = getAutocompleteValuePosition(value, options);
        const propsWithModel = {...props, model:this, inheritedValue:valuePositionInOptions, onChange:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, value:formValue[this.id]}
        return EnumInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue({...formValue,[name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return chipGenerator(this.resourceName,props );
    }

}