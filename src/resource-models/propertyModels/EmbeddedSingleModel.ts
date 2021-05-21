import React from "react";
import {EmbeddedInputFields, EmbeddedPropertyModel, EmbeddedSingleOutputFields} from "./NestedPropertyModel";
import {ShowContent} from "../../generators/fields/ShowContent";
import {EmbeddedFormContent} from "../../generators/forms/EmbeddedFormContent";
import {Record} from "../Record";
import {EmbeddedPropertyRecord} from "../PropertyRecord";

export class EmbeddedSingleModel extends EmbeddedPropertyModel{
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler} =  props;
        const setParentFormValue = (values:any) => setFormValue({...formValue, [props.model.id] : values });
        return EmbeddedFormContent({
            model:this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:formValue[this.id],
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler
        })
    }

    setOutputField(props: EmbeddedSingleOutputFields): React.ReactElement<any, any> | null {

        const newProps = {...props, record: props.record ?? new EmbeddedPropertyRecord(this.id, new Record([]))}
        return ShowContent(newProps)
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }



}