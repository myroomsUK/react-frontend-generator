import React, {useEffect, useMemo, useRef, useState} from "react";
import {useGetResourceModel} from "../../../resource-models/modelsRegistry";
import {UpdateListings} from "../../../utils/referenceFieldUtils";
import {useEdit} from "../../../redux/actions/verbs/edit";
import {getFormValueFromRecord} from "../../forms/formHelpers";
import GenericForm from "../../forms/genericForm";
import {FormGenerator} from "../../forms/FormGenerator";

interface EditFormGeneratorProps{
    propResourceName:string,
    propId:number,
    record: any,
    propEditPage?:any,
}

/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export const EditForm: React.FC<EditFormGeneratorProps> = ({record, propId, propResourceName, propEditPage}) => {
    console.log(record);
    const {model, resourceName, editPage} = useGetResourceModel(propResourceName);
    const createEditPageToUse:any = useMemo(()=> propEditPage ? propEditPage: editPage,[propEditPage, editPage])
    const initialValue = useRef({});
    const [formValue, setFormValue] = useState(initialValue.current);

    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const {edit, errors} = useEdit();

    useEffect(()=>{ setGenericEditRender(<div/>)},[resourceName])

    useEffect(()=>setFormValue(getFormValueFromRecord(record, model)), [record])

    const [genericEditRender, setGenericEditRender] = useState(<div/>)

    const submitHandler = async (formValue:any)=> edit(resourceName,propId, formValue).then(response => {
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
            resourceId: propId.toString(),

        }
    },[model,referencesMap, formValue, resourceName, propId])


    useEffect(()=>{
        if(formValue!==initialValue.current){
            if(createEditPageToUse){
                setGenericEditRender(<GenericForm  {...editFormProps} page={createEditPageToUse} errors={errors}  />)
            }else{
                setGenericEditRender(<FormGenerator {...editFormProps} errors={errors} text="Save"/>)
            }
        }
    },[formValue, errors])



    return genericEditRender;
}
