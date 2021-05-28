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
        const finalValue = (value) ? (typeof value === "number" ? new ListingOption(value, "")  : new ListingOption(value.get("id"), "")): undefined
        const propsWithModel = Object.assign(Object.assign({}, props), {model:this,onChange: inputHandler, inheritedValue:finalValue });
        return ReferenceInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}:InputOnChangeHandler){
        return (vars:any)=>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value.toMap()));
        }
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        return ReferenceShow({...props, propertyModel:this});
    }

    getRecord(record: any): any{
        console.log("record", record)
        if(record){
            if(record instanceof Map){
                return record;
            }else if(typeof record === "object"){
                return Record.createFromJsonNoModel(record);
            }else{
                return parseInt(record.substring(record.lastIndexOf("/")+1, record.length))
            }
        }
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
    value: Map<string, any>|number,
    model:this,
    refreshReferencesMap:any
}