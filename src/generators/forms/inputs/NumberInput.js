import {TextValidator} from "react-material-ui-form-validator";
import React from "react";

export default function ({name, onClick, value, label,...rest}){

    const trueValue = value ? parseInt(value): null;

    return <TextValidator
        {...rest}
        label={label}
        onChange={onClick}
        value={trueValue}
        style={{width: "100%"}}
        type="number"
    />
}