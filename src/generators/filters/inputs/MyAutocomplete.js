import React, {useEffect, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export function MyAutocomplete({modelItem, inheritedOptions, inheritedValue, variant ="standard", noLabel = true, ...rest}){
    const {id, label, cardinality} = modelItem;
    const [options, setOptions] = useState( []);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
            if(inheritedOptions){
                setOptions(inheritedOptions)
            }
        }, [inheritedOptions])

    useEffect(()=>{
        if(inheritedValue!==null){
            setValue(options[inheritedValue])
        }else{
            setValue(null);
        }}, [inheritedValue, options])

    const autocompleteOnChange = (item)=>
    {
        if(cardinality ===1){
            //console.log("value in autocomplete", item);options[0]

            setValue(item);
            rest.onChange(id, item.id);
        }else{
            setValue(item);
            rest.onChange(id, item.map(singleItem => singleItem.id))
        }
    }

    const getOptionLabel = (option) => {
        if(value === null){
           return option["label"];
        }else{
            return option["label"];
        }
    }

    return <Autocomplete
        id={id}
        {...rest}
        value={value}
        inputValue={inputValue}
        disableClearable
        options={options}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        onChange={(event,value)=>autocompleteOnChange(value)}
        getOptionLabel={getOptionLabel}
        style={{ width: "100%", minWidth:150 }}
        renderInput={(params) => <TextField {...params} label={noLabel ? null: label} variant={variant} />}
    />
}