import React, {useEffect, useState} from "react";
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

export default function ({label, model, hasError, errorMessage, onClick, value, adornment}:PhoneInput){

    const [localError,setLocalError] = useState(false);
    const [localErrorMessage,setLocalErrorMessage] = useState();

    useEffect(()=>{
        if(hasError!==undefined){
            setLocalError(hasError)
        }
        if(errorMessage){
            // @ts-ignore
            setLocalErrorMessage(errorMessage)
        }
    },[hasError, errorMessage])

    const onClickHandler = (event:any) => {
        setLocalError(false);
        setLocalErrorMessage(undefined);
        if(onClick){
            onClick(event);
        }
    }

    const localOnChange = (value:any) => {
        // @ts-ignore
        onClick([model.id, value]);
    }

    return <MuiPhoneInput
        defaultCountry='gb'
        variant="outlined"
        value={value}
        error={localError}
        helperText={localErrorMessage}
        fullWidth
        onChange={localOnChange}
        onClick={onClickHandler}
    />
}
