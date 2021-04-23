import React from "react";
import {CustomTextValidator} from "../formHelpers";

interface Props{
    hasError: boolean,
    errorMessage?:string
    label: string,
    onClick: (variables: any[])=>void,
    value: number

}

export const FloatInput: React.FC<Props> = ({hasError, errorMessage, label, onClick, value}) => {

    return <CustomTextValidator
    error={hasError}
    errorMessage={errorMessage}
    label={label}
    onChange={onClick}
    value={(value ?? "").toString()}
    style={{width: "100%"}}
    type="number"
    />

}