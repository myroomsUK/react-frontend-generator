// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import React, {useEffect, useState} from "react";
import {MoneyModel} from "../../../resource-models/propertyModels/MoneyModel";
import NumberFormat from 'react-number-format';
import { TextField } from 'material-ui';
import {CustomTextValidator} from "../formHelpers";

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

    const [localValue, setLocalValue] = useState(0.00)

    useEffect(()=> {
        const newValue = integerValue/100 ?? 0
        setLocalValue(newValue)
    } ,[integerValue])

    // @ts-ignore
    const localOnChange = (money:any) =>{
        onClick([id, money*100] )
    }

    /*return <CustomTextValidator
        label={label}
        variant={"outlined"}
        value={localValue}
        onChange={(event: any) => localOnChange(event.target.value)}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
            inputComponent: NumberFormatCustom as any,
        }} error={undefined} errorMessage={undefined}    />*/
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

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}