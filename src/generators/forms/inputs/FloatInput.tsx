import React from "react";
import {CustomTextValidator} from "../formHelpers";
import {FloatModel} from "../../../resource-models/propertyModels/FloatModel";

interface Props{
    model: FloatModel,
    id?: string,
    hasError: boolean,
    errorMessage?:string
    label?: string,
    onClick: (variables: any[])=>void,
    value: number

}

export const FloatInput: React.FC<Props> = ({model, id=model.id, hasError, errorMessage, label, onClick, value}) => {

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