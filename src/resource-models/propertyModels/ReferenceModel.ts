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

    getInputField(props: any): React.ReactElement<any, any> | null {
        const {value, formValue, setFormValue} = props;
        const propsWithModel = {...props, model:this, onChange:this.getInputOnChangeHandler({formValue, setFormValue}) };
        return AutocompleteInput(propsWithModel)
    }

    getInputOnChangeHandler({formValue, setFormValue}:any){
        return (vars:any)=>{
            const [name, value] = vars;
            setFormValue({...formValue,[name]: value});
        }
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return ReferenceShow(props);
    }
}