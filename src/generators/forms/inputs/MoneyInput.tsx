// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import React from "react";
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

export default function ({model, id= model.id, label= model.label, onClick, value}:MoneyInput){

    // @ts-ignore
    const localOnChange = (money:any) =>onClick([id, money] )

    return (
        <CurrencyTextField
            label={label}
            variant="outlined"
            fullWidth
            currencySymbol="£"
            value={value}
            minimumValue="0"
            outputFormat="number"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(event:any, value:any)=> localOnChange(value)}
        />);
}