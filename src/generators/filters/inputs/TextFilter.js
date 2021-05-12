import React, {useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import {useDebouncedCallback} from "use-debounce";

export default function TextFilter({name, label, type, inputFieldOnChange, value}){

    const [localValue, setLocalValue] = useState("");

    const debounced = useDebouncedCallback(
        inputFieldOnChange(),
        500
    );

    useEffect(()=>{
        const newValue = (value) ? value :"";
        setLocalValue(newValue);
    },[value])

    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);
    }

    return <React.Fragment key={name}>
            <TextField label={label} id={name} name={name} value={localValue} onChange={localOnChange}>
            </TextField>
    </React.Fragment>
}
