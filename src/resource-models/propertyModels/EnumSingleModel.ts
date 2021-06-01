import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import {green, red, yellow} from "@material-ui/core/colors";
import SingleEnumShow from "../../generators/fields/outputs/SingleEnumShow";
import {InputOnChangeHandler} from "../PropertyModel";
import {Record} from "../Record";

interface EnumSingleInputFields extends SinglePropertyInputFields{
    options:any,
}

export class EnumSingleModel extends SinglePropertyModel{
    colorMap;
    constructor(id:string, other:any) {
        super(id, other);
        this.options = other.options;
        this.colorMap = other.colorMap;

    }

    setInputField(props: EnumSingleInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors, value} = props;
        const valuePositionInOptions = (value) ? getAutocompleteValuePosition(value, this.options) : -1;
        const propsWithModel = {...props, model:this, inheritedValue:valuePositionInOptions, onChange:this.getInputOnChangeHandler({formValue, setFormValue})}
        return EnumInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        const {propertyRecord} = props

        return SingleEnumShow({propertyModel:this, propertyRecord, colorMap: this.colorMap});
    }

    getRecord(jsonValue: any): any {
        return Record.createFromJsonNoModel(jsonValue)
    }
}