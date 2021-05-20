import React from "react";
import {EmbeddedInputFields, EmbeddedOutputFields, EmbeddedPropertyModel} from "./NestedPropertyModel";
import {ShowContent} from "../../generators/fields/ShowContent";
import {EmbeddedFormContent} from "../../generators/forms/EmbeddedFormContent";

export class EmbeddedSingleModel extends EmbeddedPropertyModel{
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, form, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler} =  props;
        const setParentFormValue = (values:any) => setFormValue({...formValue, [this.resourceName] : values });
        if(form){
            return React.cloneElement(form, props)
        }
        return EmbeddedFormContent({
            model:this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:formValue,
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler
        })
    }

    setOutputField(props: EmbeddedOutputFields): React.ReactElement<any, any> | null {
        const {showElement, model, record} = props;
        if(showElement){
            const props = {model:model, record}
            return React.cloneElement(showElement, props);
        }
        const newProps = {...props, model:this.getResource().getModel()}
        return ShowContent(newProps)
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }



}