import {
    BOOLEAN,
    EMBEDDED_MULTIPLE,
    EMBEDDED_SINGLE,
    ENUM_SINGLE,
    FILE_MULTIPLE,
    FILE_SINGLE,
    PHONE,
    REFERENCE
} from "./inputs/InputTypes";
import {TextValidator} from "react-material-ui-form-validator";
import React, {useEffect, useState} from "react";

export function initializeReferenceFields(model){
    const referenceItemsKeys = getReferenceKeys(model);
    const referenceMap = new Map();
    referenceItemsKeys.forEach(item => referenceMap.set(item.resourceName, []) );
    return referenceMap;
}

export function getReferenceKeys(model){
    return model.properties.filter((item)=> item.filterType ===REFERENCE);
}


export function getFormValueFromRecord(record, model){
    const formattedFormValue = record;
    const propertyModels = getReferenceKeys(model);
    propertyModels.forEach(propertyModel =>{
        const key = propertyModel.id;
        if(record[key]!==undefined && record[key] !==null) { //if(record[key]) ?
            if(record[key].id){ //embedded
                formattedFormValue[key] = record[key].id
            }else{ //reference
                formattedFormValue[key] = record[key]
            }

        }
    } );

    return formattedFormValue;

}


export function filterOnChangeHandler(type, onChange, formValue, vars){


    const fileOnChange = (vars) => {

        const [name, value] = vars;
        onChange({...formValue, [name]: value});
        //onChange({...formValue, [name]: value});
    }
    const controlledOnChange = (vars) =>{
        const [event] = vars;
        const target = event.target;
        let value = target.value;
        const name = target.name;
        onChange({...formValue, [name]: value});
    }
    const checkboxOnChange = (vars) =>{
        const [name, value] = vars;

        onChange({...formValue, [name]: value});
    }

    const autoCompleteOnchange = (vars) => {
        const [name, value] = vars;
        onChange({...formValue,[name]: value});
    }

    const phoneOnChange = (vars) =>{
    }

    const embeddedOnChange = (vars)=> {};
    switch (type){

        case REFERENCE:{
            return autoCompleteOnchange(vars);
        }
        case EMBEDDED_MULTIPLE:{
            return embeddedOnChange(vars);
        }
        case EMBEDDED_SINGLE:{
            return embeddedOnChange(vars);
        }
        case ENUM_SINGLE:{
            console.log("vars", vars);
            return autoCompleteOnchange(vars);
        }
        case FILE_SINGLE:{
            return fileOnChange(vars);
        }
        case FILE_MULTIPLE:{
            return fileOnChange(vars);
        }
        case BOOLEAN:{
            return checkboxOnChange(vars);
        }
        case PHONE: {
            return phoneOnChange(vars);
        }
        default:{
            return controlledOnChange(vars);
        }

    }

}

export function CustomTextValidator({error, errorMessage, onClick= null, ...rest}){

    const [localError,setLocalError] = useState(false);
    const [localErrorMessage,setLocalErrorMessage] = useState();

    useEffect(()=>{
        if(error!==undefined){
            setLocalError(error)
        }
        if(errorMessage){
            setLocalErrorMessage(errorMessage)
        }
    },[error, errorMessage])

    const onClickHandler = (event) => {
        setLocalError(false);
        setLocalErrorMessage(undefined);
        if(onClick){
            onClick(event);
        }
    }


    return <TextValidator
        autoComplete=""
        {...rest} error={localError} onClick={onClickHandler} helperText={localErrorMessage}
    />

}
