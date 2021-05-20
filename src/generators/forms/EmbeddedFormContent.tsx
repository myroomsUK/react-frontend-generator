import React, {useEffect, useState} from "react";
import {FormContent} from "./FormContent";
import {Model} from "../../resource-models/Model";
import {Errors} from "../errors/Errors";

interface EmbeddedFormContentProps{
    model:Model,
    formContent?:  React.DetailedReactHTMLElement<any, any>,
    setParentFormValue: (values:any) => void,
    referencesMap: Map<string, any>
    refreshReferencesMap:()=>void
    formValue: any,
    errors: Errors,
    submitHandler: (e:any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
}

export const EmbeddedFormContent: React.FC<EmbeddedFormContentProps> = ({model, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValue, partialSubmitHandler, submitHandler, errors}) => {

    const [localFormValue, setLocalFormValue] = useState({});

    useEffect(()=>{
        if(formValue!==undefined){
            setLocalFormValue(formValue);
        }
    },[formValue])

    return <FormContent referencesMap={referencesMap} formContent={formContent} setFormValue={setParentFormValue} model={model} refreshReferencesMap={refreshReferencesMap}
                        formValue={localFormValue} errors={errors} partialSubmitHandler={partialSubmitHandler} submitHandler={submitHandler}  lockedFormValue={{}}/>
}