import {PropertyModel} from "../PropertyModel";
import {PropertyModelCore} from "../PropertyModelCore";
import {AutocompleteInput} from "../../generators/forms/inputs/AutocompleteInput";
import React from "react";
import {SinglePropertyModel} from "./SinglePropertyModel";
import ReferenceShow from "../../generators/fields/outputs/ReferenceShow";

export class ReferenceModel extends SinglePropertyModel{
    constructor(id:string, other:PropertyModelCore) {
        super(id, other);
    }

    setInputField(props: any): React.ReactElement<any, any> | null {
        const {inputHandler, value} = props;
        const propsWithModel = Object.assign(Object.assign({}, props), {onChange: inputHandler, inheritedValue:value });
        return AutocompleteInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}:any){
        return (vars:any)=>{
            const [name, value] = vars;
            setFormValue({...formValue,[name]: parseInt(value)});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        console.log(props);
        return ReferenceShow({...props, propertyModel:this});
    }
}