import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import ChipGenerator from "../../generators/fields/outputs/chips/chipGenerator";
import {green, red, yellow} from "@material-ui/core/colors";
import SingleEnumShow from "../../generators/fields/outputs/SingleEnumShow";

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
        const valuePositionInOptions = getAutocompleteValuePosition(value, this.options);
        const propsWithModel = {...props, model:this, inheritedValue:valuePositionInOptions, onChange:this.getInputOnChangeHandler({formValue, setFormValue})}
        return EnumInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue({...formValue,[name]: value});
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        const {propertyRecord} = props

        return SingleEnumShow({propertyModel:this, propertyRecord, colorMap:{
                not_managed: {
                    backgroundColor: red.A700,
                    color:"white"
                },
                managed: {
                    backgroundColor: green.A700,
                },
                discarded: {
                    backgroundColor: yellow.A700,
                },
                enquired: {
                    backgroundColor: yellow.A100,
                },
            }});
    }

}