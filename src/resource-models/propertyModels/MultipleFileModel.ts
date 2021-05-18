import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import FileListInput from "../../generators/forms/inputs/FileListInput";
import MultipleFileShow from "../../generators/fields/outputs/MultipleFileShow";
import React from "react";

interface MultipleFileInputFields extends SinglePropertyInputFields{

}

export class MultipleFileModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        const propsWithModel = {...props, model:this, resourceName: this.resourceName, onChange:this.getInputOnChangeHandler({formValue, setFormValue}), files:formValue[this.id]}

        // @ts-ignore
        return FileListInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue({...formValue, [name]: value});
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {

        return MultipleFileShow({...props, propertyRecord: props.propertyRecord ?? []});
    }
}