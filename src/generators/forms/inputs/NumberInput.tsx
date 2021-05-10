import {TextValidator} from "react-material-ui-form-validator";
import React, {useEffect, useState} from "react";
import {StringModel} from "../../../resource-models/propertyModels/StringModel";
import {NumberModel} from "../../../resource-models/propertyModels/NumberModel";

export interface NumberInput{
    model: NumberModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}

export default function ({model, id= model.id, onClick, value, label=model.label}:NumberInput){

    const [localValue, setLocalValue] = useState(0);
    useEffect(()=>{setLocalValue(value)},[value])

    const localOnChange = (event:any) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(parseInt(value));
        onClick(event);
    }


    return <TextValidator
        label={label}
        onChange={localOnChange}
        value={localValue}
        style={{width: "100%"}}
        type="number"
        name={id}
    />
}