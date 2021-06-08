// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import React, {useEffect, useState} from "react";
import {MoneyModel} from "../../../resource-models/propertyModels/MoneyModel";

export interface MoneyInput{
    model: MoneyModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}

export default function ({model, id= model.id, label= model.label, onClick, value:integerValue}:MoneyInput){

    const [localValue, setLocalValue] = useState(0)

    useEffect(()=> {
        const newValue = integerValue/100 ?? 0
        console.log("new value", newValue)
        setLocalValue(newValue)
    } ,[integerValue])

    // @ts-ignore
    const localOnChange = (money:any) =>{
        console.log("money", money)
        onClick([id, money*100] )
    }

    return (
        <CurrencyTextField
            label={label}
            variant="outlined"
            fullWidth
            currencySymbol="£"
            value={localValue}
            minimumValue="0"
            outputFormat="number"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(event:any, value:any)=> localOnChange(value)}
        />);
}