import {PropertyModel} from "../PropertyModel";
import {PropertyModelCore} from "../PropertyModelCore";
import NumberInput from "../../generators/forms/inputs/NumberInput";
import {SinglePropertyModel} from "./SinglePropertyModel";
import NumberShow from "../../generators/fields/outputs/NumberShow";

export class NumberModel extends SinglePropertyModel{
    uselessNumber?:number;

    constructor(id:string, other:PropertyModelCore) {
        super(id, other);
        this.uselessNumber = 4;
        console.log("Number model");
    }

    getInputField(props: any): React.ReactElement<any, any> | null {
        const propsWithModel = {...props, model:this}
        return NumberInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return (vars:any) => {const [event] = vars;
            const target = event.target;
            let value = target.value;
            const name = target.id;


            setFormValue({...formValue, [name]: parseInt(value)});}
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return NumberShow(props);
    }


}