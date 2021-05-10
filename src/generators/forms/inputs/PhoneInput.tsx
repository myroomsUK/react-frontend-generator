import React from "react";
// @ts-ignore
import MuiPhoneInput from 'material-ui-phone-number';
import {PhoneModel} from "../../../resource-models/propertyModels/PhoneModel";

export interface PhoneInput{
    model: PhoneModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}

export default function ({label, model, hasError, errorMessage, onClick, value, adornment, ...rest}:PhoneInput){

    // @ts-ignore
    const localOnChange = (value) => onClick(rest.id, value);

    return <MuiPhoneInput
        defaultCountry='gb'
        variant="outlined"
        value={value}
        fullWidth
        onChange={localOnChange}
    />
}