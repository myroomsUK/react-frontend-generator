import {TextValidator} from "react-material-ui-form-validator";
import React from "react";

export default function ({name, onClick, value, label,...rest}){

    const trueValue = (value!==undefined) ? parseInt(value) : 0;

    return <TextValidator
        label={label}
        onChange={onClick}
        value={trueValue}
        style={{width: "100%"}}
        type="number"
    />
}