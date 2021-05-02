import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useGetResourceModel} from "../../resource-models/modelsRegistry";
import {useCreate} from "../../redux/actions/verbs/create";
import {FormGeneratorPropsObject} from "../forms/FormGeneratorProps";
import {FormGenerator} from "../forms/FormGenerator";
import GenericForm from "../forms/genericForm";
import {UpdateListings} from "../../utils/referenceFieldUtils";

interface Props{
    propResourceName?:string,
    propCreatePage?:any,
    lockedFormValue?:any,
}

interface CreateRouteParams{
    urlResourceName:string
}

export const Create: React.FC<Props> = ({propResourceName, propCreatePage, lockedFormValue={}}) => {
    const {urlResourceName} = useParams<CreateRouteParams>();
    const resourceNameToUse:string = useMemo(()=>propResourceName ? propResourceName : urlResourceName,[urlResourceName, propResourceName])
    const {model, resourceName, createPage} = useGetResourceModel(resourceNameToUse);
    const createPageToUse:any = useMemo(()=> propCreatePage ? propCreatePage: createPage,[createPage, propCreatePage])
    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const [formValue, setFormValue] = useState({});
    const {create, errors} = useCreate();
    const location = useLocation<object>();

    const changeFromLocation = useCallback(()=>{

        if(resourceName===urlResourceName){ // Serve per evitare di propagare le modifiche su create innestati
            setFormValue({...formValue, ...location.state})
            if(location.state){
                Object.keys(location.state).forEach((key:string) => {
                    // @ts-ignore
                    model[key] = {...model[key], disabled: true}
                })
            }
        }

    },[location, model,formValue, urlResourceName])

    useEffect(()=>{
        changeFromLocation()
    },[referencesMap])


    const [genericCreateRender, setGenericCreateRender] = useState(<div/>)
    useEffect(()=>{ setGenericCreateRender(<div/>)},[resourceName])

    const submitHandler = ()=>create(resourceName, formValue);

    const createFormProps = useMemo(()=> new FormGeneratorPropsObject({model: model, referencesMap:referencesMap, refreshReferencesMap: refreshReferencesMap, formValue:formValue, setFormValue:setFormValue, submitHandler: submitHandler, partialSubmitHandler:submitHandler, resourceName:resourceName, errors:errors, lockedFormValue:lockedFormValue})
    ,[model, referencesMap, formValue, resourceName, errors, lockedFormValue])

    useEffect(()=>{

        if(createPageToUse){
            setGenericCreateRender(<GenericForm {...createFormProps} page={createPageToUse} errors={errors}/>)
        }else{
            setGenericCreateRender(<FormGenerator {...createFormProps} />)
        }
    }, [model, referencesMap, formValue, resourceName, errors, resourceName])


    return genericCreateRender;

}