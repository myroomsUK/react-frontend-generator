import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, {useEffect, useState} from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import {FormControl} from "@material-ui/core";

export default function ({name, onClick, checked, label, hasError, errorMessage}){

    const [localError,setLocalError] = useState(false);
    const [localErrorMessage,setLocalErrorMessage] = useState();

    useEffect(()=>{
        if(hasError!==undefined){
            setLocalError(hasError)
        }
        if(errorMessage){
            setLocalErrorMessage(errorMessage)
        }
    },[hasError, errorMessage])

    const onClickHandler = (e) => {
        setLocalError(false);
        setLocalErrorMessage(undefined);
        onClick(e);
    }

    return <FormControl>
        <FormControlLabel control={<Checkbox id={name} name={name} onClick={onClickHandler} checked={checked}/>} label={label} />
        <FormHelperText>{localErrorMessage}</FormHelperText>
        </FormControl>
}