import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import SingleFileInput from "../../generators/forms/inputs/SingleFileInput";
import React from "react";
import SingleFileShow from "../../generators/fields/outputs/SingleFileShow";
import {InputOnChangeHandler} from "../PropertyModel";

export class SingleFileModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {formValue, inputHandler} = props;
        const propsWithModel = {...props, model:this,  file:formValue.get(this.id)}
        // @ts-ignore
        return SingleFileInput(propsWithModel);

    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return SingleFileShow(props);
    }
}