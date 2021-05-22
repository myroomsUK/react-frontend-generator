import React, {useEffect, useMemo, useRef, useState} from "react";
import {useGetResourceModel} from "../../../resource-models/modelsRegistry";
import {UpdateListings} from "../../../utils/referenceFieldUtils";
import {useEdit} from "../../../redux/actions/verbs/edit";
import {getFormValueFromRecord} from "../../forms/formHelpers";
import {FormGenerator} from "../../forms/FormGenerator";
import {Error, Errors} from "../../errors/Errors";
import {FormValue} from "../../../resource-models/formvalue/FormValue";
import {Record} from "../../../resource-models/Record";
import {Form} from "redux-form";

interface EditFormGeneratorProps {
    propResourceName: string,
    propId: number,
    record: object,
    propEditPage?: any,
    thenFunction?: any,
    catchfunction?: any
}

/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @param catchfunction
 * @param thenFunction
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export const EditForm: React.FC<EditFormGeneratorProps> = ({record:recordJson, propId, propResourceName, propEditPage, catchfunction = ()=>{}, thenFunction = ()=>{} }) => {
    const {model, resourceName, editPage} = useGetResourceModel(propResourceName);
    const createEditPageToUse:any = useMemo(()=> propEditPage ? propEditPage: editPage,[propEditPage, editPage])
    const initialValue = useRef(new FormValue());
    const [formValue, setFormValue] = useState<FormValue>(initialValue.current);
    const [errors, setErrors] = useState(new Errors([]));
    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const {edit, errors:responseErrors} = useEdit();



    useEffect(()=>{
        // @ts-ignore
        const {_error, ...errorFields} = responseErrors;
        // @ts-ignore
        const newErrors: Errors =  new Errors(Object.keys(errorFields).map((field) => new Error(field,errorFields[field])))
        setErrors(newErrors)},[responseErrors])

    useEffect(()=>{ setGenericEditRender(<div/>)},[resourceName])
    useEffect(()=>{
        const record = Record.createFromJson(recordJson, model);
        console.log("record",record)
        setFormValue(FormValue.createFromRecord(record, model))
    }, [recordJson])

    const [genericEditRender, setGenericEditRender] = useState(<div/>)

    const submitHandler = async (formValue:FormValue)=> edit(resourceName,propId, formValue.toJson(model)).then(response => {
        setFormValue(getFormValueFromRecord(response, model))
        return response;
    }).then(thenFunction).catch(catchfunction);

    const editFormProps = useMemo(()=>{
        return {
            model: model,
            referencesMap:referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            formValue: formValue,
            lockedFormValue: new FormValue(),
            setFormValue: setFormValue,
            submitHandler:()=>submitHandler(formValue),
            partialSubmitHandler:submitHandler,
            resourceName: resourceName,
            resourceId:propId.toString()
        }
    },[model,referencesMap, formValue, resourceName, propId])


    useEffect(()=>{
        if(formValue!==initialValue.current){
            setGenericEditRender(<FormGenerator {...editFormProps} formContent={createEditPageToUse} errors={errors} text="Save"/>)
        }
    },[formValue, errors])


    return genericEditRender;
}
