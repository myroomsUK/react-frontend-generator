import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {CustomTextValidator} from "../formHelpers";
import {StringModel} from "../../../resource-models/propertyModels/StringModel";

export interface StringInput{
    model: StringModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}

export const StringInput: React.FC<StringInput> = ({ model,id = model.id, label = model.label, onClick, value, hasError, errorMessage, adornment}) => {
    const [localValue, setLocalValue] = useState("");
    useEffect(()=>{
        if(value) setLocalValue(value)
    },[value])

    const debounced = useDebouncedCallback(
        onClick,
        1000
    );

    const localOnChange = (event:any) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);

    }

    return <CustomTextValidator
        id={id}
        name={id}
        label={label}
        onChange={localOnChange}
        value={localValue}
        autoComplete="nope"
        error={hasError}
        errorMessage={errorMessage}
        variant="outlined"
        style={{width: "100%"}}
        InputProps={{
            startAdornment: adornment
        }}
    />

};