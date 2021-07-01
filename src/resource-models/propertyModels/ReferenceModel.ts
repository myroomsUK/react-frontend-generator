import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";
import {SinglePropertyModel} from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";
import {InputOnChangeHandler} from "../PropertyModel";
import {ListingOption} from "../listings/Listing";
import ReferenceInput from "../../generators/forms/inputs/ReferenceInput";
import {Record} from "../Record";
import {SingleInputPropsInterface} from "../models/InputProps";
import {SingleSetInputFieldProps} from "../models/SetInputFieldProps";
import {Resource} from "../Resource";

export class ReferenceModel extends SinglePropertyModel{
    resourceName:string;
    resource:Resource;

    getResource(): Resource {
        return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }

    constructor(id:string, other:PropertyModelCore) {
        super(id, other);
        this.resourceName = other.resourceName;
        this.resource = (other.resource instanceof Resource) ? other.resource : new Resource(other.resource);
    }

    setInputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null {
        const {inputHandler, value} = props;
        // @ts-ignore
        const finalValue = (value) ? (typeof value === "number" ? new ListingOption(value, "")  : new ListingOption(value["id"], "")): undefined
        const propsWithModel = Object.assign(Object.assign({}, props), {model:this,onChange: inputHandler, inheritedValue:finalValue });
        return ReferenceInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}:InputOnChangeHandler){
        return (vars:any)=>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value["id"]));
        }
    }

    setOutputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null {
        return ReferenceShow(props);
    }

    getRecord(record: any): any{
        if(record){
            if(record instanceof Map){
                return record;
            }else if(typeof record === "object"){
                /*console.log("it is an object")*/
                return Record.createFromJsonNoModel(record);
            }else if(typeof record ==="number"){
                /*console.log("it is a number")*/
                return record;
            }
            else{
                /*console.log("it's something else")*/
                return parseInt(record.substring(record.lastIndexOf("/")+1, record.length))
            }
        }
    }

    getFormValue(value:any){
        return value;
    }

    getJsonFormValue(value: Map<string, any>|number){
        if(value instanceof Map){
            return value.get("id");
        } else{
            return value;
        }
    }
}

