import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import FileListInput from "../../generators/forms/inputs/FileListInput";
import MultipleFileShow from "../../generators/fields/outputs/MultipleFileShow";
import React from "react";
import {InputOnChangeHandler} from "../PropertyModel";
import {Record} from "../Record";

export class MultipleFileModel extends SinglePropertyModel{
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors} = props;
        // @ts-ignore
        const propsWithModel = {...props, model:this, resourceName: this.resourceName, onChange:this.getInputOnChangeHandler({formValue, setFormValue}), files:formValue[this.id]}

        // @ts-ignore
        return FileListInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (vars:any) => {
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return MultipleFileShow({...props, propertyRecord: props.propertyRecord ?? new Map()});
    }

    getRecord(jsonValue: any): any {
        return Record.fromJson(jsonValue)
    }
}