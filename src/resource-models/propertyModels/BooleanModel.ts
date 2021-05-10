import {SinglePropertyModel} from "./SinglePropertyModel";
import BooleanInput from "../../generators/forms/inputs/BooleanInput";
import React from "react";
import BooleanShow from "../../generators/fields/outputs/BooleanShow";

export class BooleanModel extends SinglePropertyModel {
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, checked:formValue[this.id]}
        return BooleanInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [event] = vars;
            const target = event.target;
            let value =  target.checked;
            const name = target.id;
            setFormValue({...formValue, [name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return BooleanShow(props);
    }

}