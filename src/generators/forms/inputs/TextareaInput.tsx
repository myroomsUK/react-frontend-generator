import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {TextareaModel} from "../../../resource-models/propertyModels/TextareaModel";
import MyCkEditor from "./CkEditor/MyCkEditor";


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

    const [localValue, setLocalValue] = useState("");
    useEffect(()=>{
            setLocalValue(value ?? "")
    },[value])

    const debounced = useDebouncedCallback(
        onClick,
        1000
    );

    const localOnChange = (data:any)=> {
        setLocalValue(data);
        debounced(data)
    }

    return <MyCkEditor value={localValue} onChange={localOnChange}/>
};
