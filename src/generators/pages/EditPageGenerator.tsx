import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetResourceModel} from "../../resource-models/modelsRegistry";
import {useGetOne} from "../../redux/actions/verbs/get_one";
import {useEdit} from "../../redux/actions/verbs/edit";
import {getFormValueFromRecord} from "../forms/formHelpers";
import {FormGenerator} from "../forms/FormGenerator";
import GenericForm from "../forms/genericForm";
import {UpdateListings} from "../../utils/referenceFieldUtils";


interface EditRouteParams{
    urlResourceName:string,
    id: string
}

interface Props{
    propResourceName?:string,
    propEditPage?:any,
    propId ?: any
}

export const Edit: React.FC<Props> = ({propResourceName, propEditPage, propId}) => {
    const {urlResourceName, id} = useParams<EditRouteParams>();
    const resourceNameToUse:string = useMemo(()=>propResourceName ? propResourceName : urlResourceName,[urlResourceName, propResourceName])

    const {model, resourceName, editPage} = useGetResourceModel(resourceNameToUse);
    const editPageToUse = useMemo(()=>propEditPage ? propEditPage : editPage,[propEditPage, editPage])
    const idToUse = useMemo(()=>propId ? propId : id,[propId, id])
    const initialValue = useRef({});
    const [formValue, setFormValue] = useState(initialValue.current);
    const [record, setRecord] = useState(initialValue.current);

    const {data:downloadedRecord, getOne} = useGetOne();
    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const {edit, errors} = useEdit();

    const getNewResource = useCallback(()=>{
        getOne(resourceName,idToUse);
    },[resourceName,idToUse])

    useEffect(()=>{ setGenericEditRender(<div/>)},[resourceName])

    useEffect(()=> getNewResource(),[])

    useEffect(()=>{
        if(downloadedRecord!==undefined){
            // @ts-ignore
            setRecord(downloadedRecord)
        }
    },[downloadedRecord])

    useEffect(()=>setFormValue(getFormValueFromRecord(record, model)), [record])

    const [genericEditRender, setGenericEditRender] = useState(<div/>)

    const submitHandler = async (formValue:any)=> edit(resourceName,idToUse, formValue).then(response => {
        setFormValue(getFormValueFromRecord(response, model))
        return response;
    }).catch(response => {
        //throw new Error();
    } );

    const editFormProps = useMemo(()=>{
        return {
            model: model,
            referencesMap:referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            formValue: formValue,
            setFormValue: setFormValue,
            submitHandler:()=>submitHandler(formValue),
            partialSubmitHandler:submitHandler,
            resourceName: resourceName,
            resourceId: idToUse,

        }
    },[model,referencesMap, formValue, resourceName, idToUse])


    useEffect(()=>{
        if(formValue!==initialValue.current){
            if(editPageToUse){
                setGenericEditRender(<GenericForm  {...editFormProps} page={editPageToUse} errors={errors}  />)
            }else{
                setGenericEditRender(<FormGenerator {...editFormProps} errors={errors} text="Save"/>)
            }
        }
    },[formValue, errors])



    return genericEditRender;
}
