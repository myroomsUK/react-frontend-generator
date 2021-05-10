import {SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import chipGenerator from "../../generators/fields/outputs/chips/chipGenerator";

export class EnumMultipleModel extends SinglePropertyModel{
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
        const {propertyRecord,} = props;
        const newProps = {propertyRecord, propertyModel:this};
        const record: any = Array.isArray(propertyRecord) ? propertyRecord : Object.keys(propertyRecord);
        return record.map((singleRecord:any) =>{
            const eachProp = {...props, propertyRecord: singleRecord }
            return chipGenerator(this.resourceName,eachProp );
        })
    }

}