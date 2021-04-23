import React from "react";
import MuiPhoneInput from 'material-ui-phone-number';

export default function ({label, model, error, errorMessage, onClick, value, adornment, ...rest}){

    const localOnChange = (value) => onClick(rest.id, value);

    return <MuiPhoneInput
        defaultCountry='gb'
        variant="outlined"
        value={value}
        fullWidth
        onChange={localOnChange}
    />
}