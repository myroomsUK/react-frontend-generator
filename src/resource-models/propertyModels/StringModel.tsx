import {StringInput} from "../../generators/forms/inputs/StringInput";
import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import StringShow from "../../generators/fields/outputs/StringShow";
import React from "react";
import {InputOnChangeHandler} from "../PropertyModel";


export class StringModel extends SinglePropertyModel{

    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel: StringInput = {...props, onClick:inputHandler}
        return StringInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}:InputOnChangeHandler){
        return (vars:any)=>{
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return <StringShow {...props} />
    }

    getRecord(jsonValue: any): any {
        return jsonValue
    }
}