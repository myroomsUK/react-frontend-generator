import React from "react";
import {EmbeddedInputFields, EmbeddedPropertyModel, EmbeddedSingleOutputFields} from "./NestedPropertyModel";
import {EmbeddedFormContent} from "../../generators/forms/EmbeddedFormContent";
import {Record} from "../Record";
import {EmbeddedShowContent} from "../../generators/fields/EmbeddedShowContent";
import {FormValue} from "../formvalue/FormValue";

export class EmbeddedSingleModel extends EmbeddedPropertyModel{
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler} =  props;
        const setParentFormValue = (values:any) => setFormValue( formValue.updateFormValue(props.model.id, values));
        return EmbeddedFormContent({
            model:this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:formValue.get(this.id),
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler
        })
    }

    setOutputField(props: EmbeddedSingleOutputFields): React.ReactElement<any, any> | null {

        const newProps = {...props, record: props.record ?? new Record()}
        return EmbeddedShowContent(newProps)
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    getRecord(jsonValue: object): Record {
        return Record.createFromJson(jsonValue, this.getResource().getModel())
    }

    getFormValue(value: Record): any {
        return FormValue.createFromRecord(value, this.getResource().getModel());
    }

    getJsonFormValue(value: FormValue): any {
        return value.toJson(this.getResource().getModel());
    }


}