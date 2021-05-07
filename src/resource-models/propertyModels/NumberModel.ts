import {PropertyModel} from "../PropertyModel";
import {PropertyModelCore} from "../PropertyModelCore";
import NumberInput from "../../generators/forms/inputs/NumberInput";

export class NumberModel extends PropertyModel{
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

}