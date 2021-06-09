import React, {useEffect, useMemo, useState} from "react";
import {useGetResourceModel} from "../../resource-models/modelsRegistry";
import {useCreate} from "../../redux/actions/verbs/create";
import {FormGeneratorPropsObject} from "../forms/FormGeneratorProps";
import {FormGenerator} from "../forms/FormGenerator";
import {UpdateListings} from "../../utils/referenceFieldUtils";
import {Error, Errors} from "../errors/Errors";
import {FormValue} from "../../resource-models/formvalue/FormValue";
import {Model} from "../../resource-models/Model";
import {Form} from "redux-form";

interface Props{
    propResourceName:string,
    propCreatePage?:any,
    lockedFormValue?:FormValue,
    thenFunction?:any,
    catchFunction?:any
}


interface GenericProps{
    model:Model,
    errors?: Errors,
    propCreatePage?:any,
    submitHandler: (formValue:FormValue)=>Promise<any>,
    lockedFormValue?:FormValue,
    thenFunction?:any,
    catchFunction?:any
}

export const Create: React.FC<Props> = ({propResourceName:resourceName, propCreatePage, lockedFormValue=new FormValue(), thenFunction=()=>{}, catchFunction=()=>{}}) => {
    const {model, createPage} = useGetResourceModel(resourceName);
    const createPageToUse:any = useMemo(()=> propCreatePage ? propCreatePage: createPage,[createPage, propCreatePage])
    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const [formValue, setFormValue] = useState<FormValue>(lockedFormValue);
    const {create, errors:responseErrors} = useCreate();
    const [errors, setErrors] = useState(new Errors([]));

    useEffect(()=>{
        // @ts-ignore
        const {_error, ...errorFields} = responseErrors;
        // @ts-ignore
        const newErrors: Errors =  new Errors(Object.keys(errorFields).map((field) => new Error(field,errorFields[field])))
        setErrors(newErrors)},[responseErrors])

    const [genericCreateRender, setGenericCreateRender] = useState(<div/>)
    useEffect(()=>{ setGenericCreateRender(<div/>)},[resourceName])

    const submitHandler = async ()=>create(resourceName, FormValue.toJson(formValue)).then(thenFunction).catch(catchFunction);

    const createFormProps = useMemo(()=> new FormGeneratorPropsObject({model: model, formContent:createPageToUse, referencesMap:referencesMap, refreshReferencesMap: refreshReferencesMap, formValue:formValue, setFormValue:setFormValue, submitHandler: submitHandler, partialSubmitHandler:submitHandler, errors:errors, lockedFormValue:lockedFormValue})
    ,[model, referencesMap, formValue, resourceName, errors, lockedFormValue])

    useEffect(()=>{
            setGenericCreateRender(<FormGenerator formContent={createPageToUse} {...createFormProps} errors={errors} />)
    }, [model, referencesMap, formValue, resourceName, errors])


    return genericCreateRender;

}

export const GenericCreate: React.FC<GenericProps> = ({model, submitHandler, errors = new Errors([]), propCreatePage, lockedFormValue=new FormValue(), thenFunction=()=>{}, catchFunction=()=>{}}) => {
    const createPageToUse:any = propCreatePage
    const {listings:referencesMap, updateListings:refreshReferencesMap} = UpdateListings();
    const [formValue, setFormValue] = useState<FormValue>(lockedFormValue);
    const [genericCreateRender, setGenericCreateRender] = useState(<div/>)
    useEffect(()=>{ setGenericCreateRender(<div/>)},[model])

    const submitHandlerFinal = ()=> submitHandler(formValue);

    const createFormProps = useMemo(()=> new FormGeneratorPropsObject({model: model, formContent:createPageToUse, referencesMap:referencesMap, refreshReferencesMap: refreshReferencesMap, formValue:formValue, setFormValue:setFormValue, submitHandler: submitHandlerFinal, partialSubmitHandler:submitHandlerFinal, errors:errors, lockedFormValue:lockedFormValue})
        ,[model, referencesMap, formValue, errors, lockedFormValue])

    useEffect(()=>{
        setGenericCreateRender(<FormGenerator formContent={createPageToUse} {...createFormProps} errors={errors} />)
    }, [model, referencesMap, formValue, errors])


    return genericCreateRender;

}

export const CreateResource: React.FC<Props> = ({propResourceName:resourceName, propCreatePage, lockedFormValue=new FormValue(), thenFunction=()=>{}, catchFunction=()=>{}}) => {
    const {model, createPage} = useGetResourceModel(resourceName);
    const createPageToUse:any = useMemo(()=> propCreatePage ? propCreatePage: createPage,[createPage, propCreatePage])

    const {create, errors:responseErrors} = useCreate();
    const [errors, setErrors] = useState(new Errors([]));

    useEffect(()=>{
        // @ts-ignore
        const {_error, ...errorFields} = responseErrors;
        // @ts-ignore
        const newErrors: Errors =  new Errors(Object.keys(errorFields).map((field) => new Error(field,errorFields[field])))
        setErrors(newErrors)},[responseErrors])

    const submitHandler = async (formValue:FormValue)=>create(resourceName, FormValue.toJson(formValue)).then(thenFunction).catch(catchFunction);

    return GenericCreate({model:model, propCreatePage:createPageToUse, lockedFormValue, errors, submitHandler})
}