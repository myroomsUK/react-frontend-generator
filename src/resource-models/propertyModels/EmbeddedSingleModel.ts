import React from "react";
import {
    EmbeddedInputFields,
    EmbeddedPropertyModel,
    EmbeddedSingleInputFields,
    EmbeddedSingleOutputFields
} from "./NestedPropertyModel";
import {EmbeddedFormContent} from "../../generators/forms/EmbeddedFormContent";
import {Record} from "../Record";
import {EmbeddedShowContent} from "../../generators/fields/EmbeddedShowContent";
import {FormValue} from "../formvalue/FormValue";

export class EmbeddedSingleModel extends EmbeddedPropertyModel{
    setInputField(props: EmbeddedSingleInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, record, refresh} =  props;
        const setParentFormValue = (values:any) => setFormValue( formValue.updateFormValue(props.model.id, values));

        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue()

        return EmbeddedFormContent({
            model:this.getResource().getModel(),
            formContent: this.form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:finalFormValue,
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler,
            record: record ?? new Record(),
            refresh: refresh
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
        return value.toJson();
    }


}