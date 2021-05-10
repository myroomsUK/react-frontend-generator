import NestedFormContent from "../../generators/forms/NestedFormContent";
import React from "react";
import {EmbeddedInputFields, NestedPropertyModel} from "./NestedPropertyModel";
import {ShowContent} from "../../generators/fields/ShowContent";

export class EmbeddedSingleModel extends NestedPropertyModel{
    getOutputField(props: any): React.ReactElement<any, any> | null {
        const newProps = {...props, model:this.getResource().getModel(), resourceName:this.getResource().resourceName}
        return ShowContent(newProps)
    }

    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, form, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler} =  props;
        const setParentFormValue = (values:any) => setFormValue({...formValue, [this.resourceName] : values });
        return NestedFormContent({
            model:this.getResource().getModel(),
            form:form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:formValue[this.id],
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler
        })
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }



}