import {SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import ChipGenerator from "../../generators/fields/outputs/chips/chipGenerator";
import React from "react";
import {InputOnChangeHandler} from "../PropertyModel";
import {Record} from "../Record";
import ButtonsHorizontalList from "../../rendering/components/buttons/ButtonsHorizontalList";
import {SingleSetInputFieldProps} from "../models/SetInputFieldProps";

interface EnumMultipleInputFields extends SingleSetInputFieldProps{
    options: any;
}

export class EnumMultipleModel extends SinglePropertyModel{
    options;
    colorMap;

    constructor(id:string, others:any) {
        super(id, others);
        this.options = others.options;
        this.colorMap = others.colorMap;
    }
    setInputField(props: EnumMultipleInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors, options, value} = props;
        const valuePositionInOptions = getAutocompleteValuePosition(value, options);
        const propsWithModel = {...props, model:this, inheritedValue:valuePositionInOptions, onChange:this.getInputOnChangeHandler({formValue, setFormValue})}
        return EnumInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null {
        const {record} = props;
        const newrecord: any = (record===undefined) ? []: (Array.isArray(record) ? record : Object.keys(record));
        return <ButtonsHorizontalList>
            {
                newrecord.map((singleRecord:any, index:number) =>{
                    return <ChipGenerator key={index} propertyModel={this} propertyRecord={singleRecord} colorMap={this.colorMap}/>
                })
            }
        </ButtonsHorizontalList>

    }

    getRecord(jsonValue: any): any {
        return Record.createFromJsonNoModel(jsonValue)
    }

}