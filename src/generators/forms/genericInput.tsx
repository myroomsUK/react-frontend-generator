import React, {useMemo} from "react";
import {InputField} from "./genericInputField";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {Model} from "../../resource-models/Model";
import {Errors, Error} from "../errors/Errors";
import {onChangeHandler} from "./inputHandlers";
import {EMBEDDED_MULTIPLE, EMBEDDED_SINGLE} from "./inputs/InputTypes";
import {useEdit} from "../../redux/actions/verbs/edit";


export interface GenericInput{
    requestedName: string;
    formValue: any;
    lockedFormValue: any;
    form?:React.DetailedReactHTMLElement<any, any>;
    model: PropertyModel|Model;
    referencesMap:Map<string, any>;
    refreshReferencesMap: ()=> void;
    setFormValue:React.Dispatch<React.SetStateAction<any>>;
    errors: Errors|any;
    partialSubmitHandler:(formValue:any)=>Promise<any>;
    submitHandler:(e:any) => Promise<any>;
    resourceName: string;
    resourceId?: string;
}


export const GenericInput: React.FC<GenericInput> = ({requestedName, resourceName, resourceId, setFormValue, model, formValue, lockedFormValue, referencesMap,refreshReferencesMap, errors, partialSubmitHandler, submitHandler, form}) => {
    const inputOnChangeHandler: (type:string) => ((variables: any[])=>void)
        = (type:string) =>{return (...vars:any[])=> onChangeHandler({type:type, setFormValue:setFormValue, formValue: formValue, vars: vars});}


    const {_error, ...errorFields} = errors;
    const newErrors: Errors = (errors instanceof Errors) ? errors : new Errors(Object.keys(errorFields).map((field) => new Error(field,errorFields[field])))

    const setParentFormValue = (resourceName:string) => (values:any) => setFormValue({...formValue, [resourceName] : values });

    const {edit} = useEdit(); // FOR NESTED ELEMENTS ONLY
    const propertyModel = useMemo(()=> (model instanceof Model) ? model.getProperty(requestedName) : model,[model, requestedName])


    if(propertyModel){
        const type = propertyModel.type;
        const usedForm = form ?? propertyModel.form;

        if(requestedName in lockedFormValue) return <></>;

        if(type===EMBEDDED_MULTIPLE){

            const nestedErrors = newErrors.nestedErrorExtrapolator(formValue,requestedName)
            return <InputField
                type={type}
                requestedName={requestedName}
                onClick={inputOnChangeHandler(type)}
                model={propertyModel}
                value={formValue[requestedName]}
                parentFormValue={formValue}
                referencesMap={referencesMap}
                refreshReferencesMap={refreshReferencesMap}
                setParentFormValue={setParentFormValue}
                errors={nestedErrors}
                partialSubmitHandler={partialSubmitHandler}
                form={usedForm}
                submitHandler={submitHandler}
                hasError={false}
                resourceName={resourceName}
                resourceId={resourceId}
            />;

        }
        if(type===EMBEDDED_SINGLE){
            const errors = newErrors.nestedSingleErrorExtrapolator(requestedName);
            const partialSubmitHandler = async (formValue: any)=> edit(propertyModel.getResource()?.resourceName,formValue.get('id'), formValue)
            return <InputField
                type={type}
                requestedName={requestedName}
                onClick={inputOnChangeHandler(type)}
                model={propertyModel}
                value={formValue[requestedName]}
                parentFormValue={formValue}
                referencesMap={referencesMap}
                refreshReferencesMap={refreshReferencesMap}
                setParentFormValue={setParentFormValue}
                errors={errors}
                partialSubmitHandler={partialSubmitHandler}
                form={usedForm}
                submitHandler={submitHandler}
                hasError={false}
                resourceName={resourceName}
                resourceId={resourceId}
            />;
        }


        const errorMessage = newErrors.returnMessageByName(requestedName);
        const hasError = newErrors.containsError(requestedName);
        return <InputField
            type={type}
            requestedName={requestedName}
            onClick={inputOnChangeHandler(type)}
            model={propertyModel}
            value={formValue[requestedName]}
            parentFormValue={formValue}
            referencesMap={referencesMap}
            refreshReferencesMap={refreshReferencesMap}
            setParentFormValue={setParentFormValue}
            errors={errors}
            partialSubmitHandler={partialSubmitHandler}
            form={usedForm}
            submitHandler={submitHandler}
            hasError={hasError}
            errorMessage={errorMessage}
            resourceName={resourceName}
            resourceId={resourceId}
            formValue={formValue}
            setFormValue={setFormValue}
            />
    }else{
        return <div>{requestedName}</div>
    }

}

