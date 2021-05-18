import React, {useEffect, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export function MyAutocomplete({modelItem, inheritedOptions, inheritedValue, variant ="standard", noLabel = true, multiple=false, ...rest}){
    const {id, label} = modelItem;
    const [value, setValue] = useState((multiple) ? [] : null);
    const [localOptions, setLocalOptions] = useState( []);
    const [inputValue, setInputValue] = useState("");


    useEffect(()=>{
        if(inheritedOptions){
            setLocalOptions(inheritedOptions)
        }}, [inheritedOptions]);


    useEffect(()=>{
        const localOptionsLengthCondition = localOptions.length!==0;

        if(multiple){
            const existingPositions = inheritedValue.filter((position) => position!==-1);
            setValue(existingPositions.map((truePosition) => localOptions[truePosition]));
        }else{
            if(inheritedValue!==-1 && localOptionsLengthCondition){
                setValue(localOptions[inheritedValue]);
            }
        }

    }, [inheritedValue, localOptions])


    const autocompleteOnChange = (item)=>
    {
        if(multiple) {
            setValue(item);
            rest.onChange(id, item.map(singleItem => singleItem.id))
        }else{
            setValue(item);
            rest.onChange(id, item.id);
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
        value={value}
        inputValue={inputValue}
        multiple={multiple}
        disableClearable
        options={localOptions}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        onChange={(event,value)=>autocompleteOnChange(value)}
        getOptionLabel={getOptionLabel}
        style={{ width: "100%", minWidth:150 }}
        renderInput={(params) => <TextField {...params} label={noLabel ? null: label} variant={variant} />}
    />
}