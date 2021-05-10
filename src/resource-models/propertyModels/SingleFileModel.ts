import {SinglePropertyModel} from "./SinglePropertyModel";
import SingleFileInput from "../../generators/forms/inputs/SingleFileInput";
import React from "react";
import SingleFileShow from "../../generators/fields/outputs/SingleFileShow";

export class SingleFileModel extends SinglePropertyModel{
    getInputField(props: any): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const {errorMessage, hasError} = this.manipulateErrors(errors);
        const propsWithModel = {...props, model:this, onClick:this.getInputOnChangeHandler({formValue, setFormValue}), errorMessage, hasError, file:formValue[this.id]}
        return SingleFileInput(propsWithModel);

    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue({...formValue, [name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return SingleFileShow(props);
    }
}