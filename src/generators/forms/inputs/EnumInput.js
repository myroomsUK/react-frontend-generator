import React, {useEffect, useMemo, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextValidator} from "react-material-ui-form-validator";


export function EnumInput({model, options, inheritedValue, onChange}){

    const {id, label} = useMemo(()=>{return model},[model]);
    const [localOptions, setLocalOptions] = useState( []);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");


    useEffect(()=>{
        setLocalOptions(options)
    }, [options])

    useEffect(()=>{
        const valuePositionInOptions = getAutocompleteValuePosition(inheritedValue, localOptions);
        const localOptionsLengthCondition = localOptions.length!==0;
        if(valuePositionInOptions!==-1 && localOptionsLengthCondition){
        setValue(localOptions[valuePositionInOptions]);
    }}, [ localOptions])

    const autocompleteOnChange = (item)=> onChange(id,parseInt(item.id))

    return <>
        <Autocomplete
            value={value}
            inputValue={inputValue}
            disableClearable
            options={localOptions}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event,value)=>autocompleteOnChange(value)}
            getOptionLabel={(option) => option["label"]}
            renderOption={(option) => (option.button) ? option.button :  <div>{option.label}</div>}
            style={{ width: "100%" }}
            label={label}
            renderInput={({...params}) =>
                <TextValidator {...params}
                    variant="outlined" value={value}
                    label={label}
                    style={{width: "100%"}}
                    autoComplete="nope"
                />
            }
        />
    </>

}

/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value,options){
    return options.indexOf(options.find(option => parseInt(option.id) === value));
}