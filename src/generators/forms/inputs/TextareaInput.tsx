import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {CustomTextValidator} from "../formHelpers";
import {TextareaModel} from "../../../resource-models/propertyModels/TextareaModel";

interface Props{
    model: TextareaModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;

}

export const TextareaInput: React.FC<Props> = ({model, label = model.label, onClick, value, hasError, errorMessage, adornment}) => {

    const [localValue, setLocalValue] = useState(value);
    useEffect(()=>setLocalValue(value),[value])

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
        autoComplete="nope"
        error={hasError}
        name={model.id}
        id={model.id}
        errorMessage={errorMessage}
        variant="outlined"
        label={label}
        onChange={localOnChange}
        value={localValue}
        style={{width: "100%"}}
        multiline
        rows={4}
        InputProps={{
            startAdornment: adornment
        }}
    />

};