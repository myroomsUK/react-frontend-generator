import React, {useEffect, useState} from "react";
import {FormContent} from "./FormContent";
import {Model} from "../../resource-models/Model";
import {Errors} from "../errors/Errors";
import {FormValue} from "../../resource-models/formvalue/FormValue";
import {Record} from "../../resource-models/Record";

interface EmbeddedFormContentProps{
    model:Model,
    formContent?:  React.DetailedReactHTMLElement<any, any>,
    setParentFormValue: (values:any) => void,
    referencesMap: Map<string, any>
    refreshReferencesMap:()=>void
    formValue: FormValue,
    record: Record,
    errors: Errors,
    submitHandler: (e:any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
}

export const EmbeddedFormContent: React.FC<EmbeddedFormContentProps> = ({model, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValue, partialSubmitHandler, submitHandler, errors, record}) => {

    const [localFormValue, setLocalFormValue] = useState(new FormValue());

    useEffect(()=>{
        if(formValue!==undefined){
            setLocalFormValue(formValue);
        }
    },[formValue])

    return <FormContent record={record} referencesMap={referencesMap} formContent={formContent} setFormValue={setParentFormValue} model={model} refreshReferencesMap={refreshReferencesMap}
                        formValue={localFormValue} errors={errors} partialSubmitHandler={partialSubmitHandler} submitHandler={submitHandler}  lockedFormValue={new FormValue()}/>
}