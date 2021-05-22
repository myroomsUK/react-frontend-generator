import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import BooleanInput from "../../generators/forms/inputs/BooleanInput";
import React from "react";
import BooleanShow from "../../generators/fields/outputs/BooleanShow";
import {InputOnChangeHandler} from "../PropertyModel";

export class BooleanModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null {
      const {inputHandler, formValue} = props;
      const propsWithModel = {...props, onClick:inputHandler,checked:formValue.get(this.id)}
      return BooleanInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): any {
        return (event:any) => {
            const target = event.target;
            let value =  target.checked;
            const name = target.id;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return BooleanShow(props);
    }

    getRecord(jsonValue: any): any {
        return jsonValue;
    }

}