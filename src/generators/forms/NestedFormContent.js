import React, {useEffect, useMemo, useState} from "react";
import {getResourceModel} from "../../resource-models/modelsRegistry";
import {FormContent} from "./FormContent";

export default function NestedFormContent({model, form, setParentFormValue, formValue, errors, referencesMap, refreshReferencesMap, partialSubmitHandler, submitHandler}){
    const resource = useMemo(()=> model.resource ?? getResourceModel(model.resourceName),[model]);
    const embModel = useMemo(()=> resource.model,[resource])
    const [localFormValue, setLocalFormValue] = useState({});

    useEffect(()=>{
        if(formValue!==undefined){
            setLocalFormValue(formValue);
        }
    },[formValue])


    return <FormContent referencesMap={referencesMap} form={form} setFormValue={setParentFormValue} model={embModel} refreshReferencesMap={refreshReferencesMap}
                        formValue={localFormValue} errors={errors} partialSubmitHandler={partialSubmitHandler} submitHandler={submitHandler} />
}