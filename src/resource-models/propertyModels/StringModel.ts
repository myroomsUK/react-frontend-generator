import {PropertyModel} from "../PropertyModel";
import {StringInput} from "../../generators/forms/inputs/StringInput";
import {PropertyModelCore} from "../PropertyModelCore";


export class StringModel extends PropertyModel{
    constructor(id:string, others:PropertyModelCore) {
        super(id, others);
    }
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue} = props;
        console.log("formvalue", formValue);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue})}
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

}