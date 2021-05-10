import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, {useEffect, useState} from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import {FormControl} from "@material-ui/core";
import {BooleanModel} from "../../../resource-models/propertyModels/BooleanModel";

export interface BooleanInput{
    model: BooleanModel;
    onClick:(e:any)=>void;
    value: any;
    hasError:boolean;
    checked:boolean,
    id?:string,
    name?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}




export default function BooleanInput({model, name = model.id, onClick, checked, label = model.label, hasError, errorMessage}:BooleanInput){

    const [localError,setLocalError] = useState(false);
    const [localErrorMessage,setLocalErrorMessage] = useState("");

    useEffect(()=>{
        if(hasError!==undefined){
            setLocalError(hasError)
        }
        if(errorMessage){
            setLocalErrorMessage(errorMessage)
        }
    },[hasError, errorMessage])

    const onClickHandler = (e:any) => {
        setLocalError(false);
        setLocalErrorMessage("");
        onClick(e);
    }

    return <FormControl>
        <FormControlLabel control={<Checkbox id={name} name={name} onClick={onClickHandler} checked={checked}/>} label={label} />
        <FormHelperText>{localErrorMessage}</FormHelperText>
    </FormControl>
}