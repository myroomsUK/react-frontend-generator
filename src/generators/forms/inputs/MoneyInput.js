import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import React from "react";

export default function ({onClick, value, ...rest}){

    const localOnChange = (money) =>onClick(rest.id, money )

    return (
        <CurrencyTextField
            label={rest.label}
            variant="outlined"
            fullWidth
            currencySymbol="£"
            value={value}
            minimumValue="0"
            outputFormat="number"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(event, value)=> localOnChange(value)}
        />);
}