import {TextValidator} from "react-material-ui-form-validator";
import React, {useEffect, useState} from "react";
import {getDateInputFormat} from "../../../utils/timeUtils";

export default function ({name, onClick, value, label,...rest}){

    const [localValue, setLocalvalue] = useState(getDateInputFormat());
    

    const localChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.id;
        onClick(name, value);


    }

    useEffect(()=>{
        if(value===undefined){
            const nwValue = getDateInputFormat();
            setLocalvalue(nwValue);
        }else{
            setLocalvalue(value);
        }

    },[value])


    return <TextValidator
        {...rest}
        label={label}
        onChange={localChange}
        value={localValue}
        style={{width: "100%"}}
        type="date"
    />
}