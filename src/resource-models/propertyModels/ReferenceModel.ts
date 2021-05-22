import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";
import {SinglePropertyModel} from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";
import {InputOnChangeHandler} from "../PropertyModel";
import {ListingOption} from "../listings/Listing";
import ReferenceInput from "../../generators/forms/inputs/ReferenceInput";
import {Record} from "../Record";

export class ReferenceModel extends SinglePropertyModel{
    constructor(id:string, other:PropertyModelCore) {
        super(id, other);
    }

    setInputField(props: ReferenceInputFields): React.ReactElement<any, any> | null {
        const {inputHandler, value} = props;
        const finalValue = (value) ? new ListingOption(value.get("id"), value.get(this.optionText)) : undefined
        const propsWithModel = Object.assign(Object.assign({}, props), {model:this,onChange: inputHandler, inheritedValue:finalValue });
        return ReferenceInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}:InputOnChangeHandler){
        return (vars:any)=>{
            console.log("vars", vars)
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value.toMap()));
         //   setFormValue({...formValue,[name]: parseInt(value.id)});
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return ReferenceShow({...props, propertyModel:this});
    }

    getRecord(jsonValue: any): any{
        return Record.fromJson(jsonValue)
    }

    getFormValue(value:any){
        return value;
    }

    getJsonFormValue(value: Map<string, any>){
        return value.get("id");
    }
}


interface ReferenceInputFields{
    inputHandler:any,
    value: Map<string, any>,
    model:this,
    refreshReferencesMap:any
}