import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {CustomTextValidator} from "../formHelpers";
import {PropertyModel} from "../../../resource-models/PropertyModel";

interface Props{
    hasError:boolean;
    model:PropertyModel;
    errorMessage?:string;
    label:string;
    onClick:(e:any)=>void;
    value: any;
    adornment?: any;

}

export const StringInput: React.FC<Props> = ({model, label, onClick, value, hasError, errorMessage, adornment}) => {

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
        InputProps={{
            startAdornment: adornment
        }}
    />

};