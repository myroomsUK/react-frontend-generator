import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {TextareaModel} from "../../../resource-models/propertyModels/TextareaModel";
import MyCkEditor from "./CkEditor/MyCkEditor";
import {Grid} from "@material-ui/core";


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
    useEffect(()=>{
        if(value){
            setLocalValue(value)
        }
    },[value])

    const debounced = useDebouncedCallback(
        onClick,
        1000
    );

    const localOnChange = (data:any)=> {
        setLocalValue(data);
        debounced(data)
    }

    return <Grid container spacing={2}>
        <Grid item xs={12}>{label}</Grid>
        <Grid item xs={12}>
            <MyCkEditor value={localValue} onChange={localOnChange}/>
        </Grid>
    </Grid>
};
